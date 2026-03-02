export function SiteFooter() {
  return (
    <>
      {/* Footer Logo Section */}
      <div className="w-full overflow-hidden flex justify-center px-6 -mt-[30px] mb-1.5">
        <div
          className="w-full max-w-[600px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.7) 35%, black 50%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.4) 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.7) 35%, black 50%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.4) 80%, transparent 100%)",
          }}
        >
          <img
            src="/logo-wide.png"
            alt="RevenueLaunch"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="-mt-[180px] pb-8 relative">
        <div className="mx-auto max-w-[1200px] px-6 relative z-[1]">
          <div className="flex flex-col items-center gap-3">
            <nav
              className="flex flex-col md:flex-row gap-4 md:gap-8"
              aria-label="Footer"
            >
              <a
                href="#"
                className="text-[#ccc] text-sm no-underline hover:text-foreground transition-colors text-center"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#ccc] text-sm no-underline hover:text-foreground transition-colors text-center"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#ccc] text-sm no-underline hover:text-foreground transition-colors text-center"
              >
                Contact
              </a>
            </nav>
            <p className="text-center text-[#666] text-sm">
              {"© 2026 RevenueLaunch. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
