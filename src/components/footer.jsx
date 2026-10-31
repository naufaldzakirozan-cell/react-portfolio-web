
const Footer = () => {
    return (
        <div className="mt-32 py-34 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>

<div className="flex items-center gap-2">
  <a
    href="https://www.tiktok.com/@naufaldzakirozan"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-violet-400 transition-all"
  >
    Follow Akun Di kanan. Pencet Aja
    <i className="ri-arrow-right-long-line ri-xl"></i>
  </a>
</div>

            <div className="flex items-center gap-3">
                {/* GitHub */}
                <a href="#">
                    <i className="ri-github-fill ri-2x"></i>
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/nopal_dzarky"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>

                {/* TikTok */}
                <a
                    href="https://www.tiktok.com/@naufaldzakirozan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="ri-tiktok-fill ri-2x"></i>
                </a>

                {/* YouTube */}
                <a href="#">
                    <i className="ri-youtube-fill ri-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer

{/*FOOTER*/}
