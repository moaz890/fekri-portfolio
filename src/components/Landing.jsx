import React from 'react'

function Landing() {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-65px)] py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" data-alt="Abstract image of a modern industrial blueprint or schematic" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZJrFxrffMQZNwi3hnMWvNHOJgyjwkSGLtJcNS9YIDEGOuztyA-KSsL4qiUnuCR7RQZWOMS-e4cXLFmj9eKTzvpd_g-G4BPPMVgf2Xxt7L2O6Itg_IIG4on56kg94oo8koXMriGqvGKKro3nkCyre0-RHcqe_Z86Ib8hVlwdcptgvq1T6ctCGzb5KVOHSlrumgxD4B9UJvbZ-6X93PtpTEzrrL8meAjz4lcBLcKZXWE6YLMntThfZhKcieDv873QFEDfEori3qSE")'}}></div>
        <div className="absolute inset-0 bg-background-dark/80"></div>
        <div className="relative text-center text-white z-10 flex flex-col items-center gap-6 max-w-3xl">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                    Mohammed Fekri
                </h1>
                <h2 className="text-slate-300 text-lg font-normal leading-normal sm:text-xl">
                    Mechanical Engineer. Designing and building innovative mechanical solutions.
                </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Explore My Portfolio</span>
            </button>
        </div>
    </section>
  )
}

export default Landing