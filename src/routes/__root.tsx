import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'KWM Exterior Services' },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="kwm-header">
          <div className="kwm-logo">
            <h1>KWM Exterior Services</h1>
          </div>
          <nav className="kwm-nav">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#quote" style={{ color: '#6baa3d' }}>Get a Quote</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
