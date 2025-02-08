import Marquee from "./marquee"

export default function MarqueeDemo() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Marquee Effect Demo</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">Default (Left to Right)</h2>
        <Marquee>
          <span className="text-2xl mx-4">
            🌟 Welcome to our awesome website! 🚀 Check out our latest products! 💼 Join our team! 🌈
          </span>
        </Marquee>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Right to Left</h2>
        <Marquee direction="right" speed={30}>
          <span className="text-2xl mx-4">
            🍎 Fresh fruits! 🥕 Crisp vegetables! 🥖 Warm bread! 🧀 Artisanal cheese!
          </span>
        </Marquee>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Slower Speed</h2>
        <Marquee speed={40}>
          <span className="text-2xl mx-4">🐢 Take it slow... Enjoy the journey... Breathe deeply... Relax...</span>
        </Marquee>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">No Pause on Hover</h2>
        <Marquee pauseOnHover={false}>
          <span className="text-2xl mx-4">🏃‍♂️ Can't stop, won't stop! This marquee keeps on moving! 🏃‍♀️</span>
        </Marquee>
      </div>
    </div>
  )
}

