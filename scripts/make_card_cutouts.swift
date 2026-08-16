import AppKit
import Foundation

let inputDirectory = URL(fileURLWithPath: "public/assets/cards", isDirectory: true)
let names = ["ace-herald", "joker", "king", "prince", "queen"]

func isBackground(_ pixels: [UInt8], _ index: Int) -> Bool {
  let offset = index * 4
  return pixels[offset] > 235 && pixels[offset + 1] > 235 && pixels[offset + 2] > 235
}

for name in names {
  let source = inputDirectory.appendingPathComponent("\(name).png")
  let destination = inputDirectory.appendingPathComponent("\(name)-cutout.png")

  guard let image = NSImage(contentsOf: source),
        let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    fatalError("Could not read \(source.path)")
  }

  let width = cgImage.width
  let height = cgImage.height
  let byteCount = width * height * 4
  var pixels = [UInt8](repeating: 0, count: byteCount)
  let colorSpace = CGColorSpaceCreateDeviceRGB()

  guard let context = CGContext(
    data: &pixels,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: width * 4,
    space: colorSpace,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
  ) else {
    fatalError("Could not make image context")
  }

  context.interpolationQuality = .none
  context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))

  var visited = [Bool](repeating: false, count: width * height)
  var queue = [Int]()
  queue.reserveCapacity(width * 4 + height * 4)

  func enqueue(_ index: Int) {
    guard !visited[index], isBackground(pixels, index) else { return }
    visited[index] = true
    queue.append(index)
  }

  for x in 0..<width {
    enqueue(x)
    enqueue((height - 1) * width + x)
  }
  for y in 0..<height {
    enqueue(y * width)
    enqueue(y * width + width - 1)
  }

  var cursor = 0
  while cursor < queue.count {
    let index = queue[cursor]
    cursor += 1
    let x = index % width
    let y = index / width

    if x > 0 { enqueue(index - 1) }
    if x + 1 < width { enqueue(index + 1) }
    if y > 0 { enqueue(index - width) }
    if y + 1 < height { enqueue(index + width) }
  }

  for index in queue {
    pixels[index * 4 + 3] = 0
  }

  guard let output = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: width * 4,
    bitsPerPixel: 32
  ), let outputPixels = output.bitmapData else {
    fatalError("Could not make output bitmap")
  }

  pixels.withUnsafeBytes { bytes in
    memcpy(outputPixels, bytes.baseAddress!, byteCount)
  }
  try output.representation(using: .png, properties: [:])!.write(to: destination)
  print("Created \(destination.path)")
}
