import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans">
      <main className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <header className="space-y-4 border-b border-border pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Clinical Luxury Theme</h1>
          <p className="text-xl text-muted-foreground">
            Design System Overview & UI Kit
          </p>
        </header>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">Typography</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-baseline">
              <span className="text-sm text-muted-foreground">Heading 1</span>
              <h1 className="col-span-2 text-4xl font-bold tracking-tight">The Quick Brown Fox</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-baseline">
              <span className="text-sm text-muted-foreground">Heading 2</span>
              <h2 className="col-span-2 text-3xl font-semibold tracking-tight">Jumps Over The Lazy Dog</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-baseline">
              <span className="text-sm text-muted-foreground">Heading 3</span>
              <h3 className="col-span-2 text-2xl font-semibold tracking-tight">Clinical Precision & Trust</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-baseline">
              <span className="text-sm text-muted-foreground">Body</span>
              <p className="col-span-2 leading-7">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-baseline">
              <span className="text-sm text-muted-foreground">Muted</span>
              <p className="col-span-2 text-sm text-muted-foreground">
                This is muted text used for secondary information, captions, or less important details.
              </p>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-primary shadow-sm"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Primary</p>
                <p className="text-xs text-muted-foreground">Teal 600</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-secondary shadow-sm border border-border"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Secondary</p>
                <p className="text-xs text-muted-foreground">Slate 50</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-accent shadow-sm"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Accent</p>
                <p className="text-xs text-muted-foreground">Blue 500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-destructive shadow-sm"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Destructive</p>
                <p className="text-xs text-muted-foreground">Red 500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-muted shadow-sm border border-border"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Muted</p>
                <p className="text-xs text-muted-foreground">Slate 100</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-card shadow-sm border border-border"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Card</p>
                <p className="text-xs text-muted-foreground">White</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-popover shadow-sm border border-border"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Popover</p>
                <p className="text-xs text-muted-foreground">White</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 w-full rounded-md bg-background border border-border shadow-sm"></div>
              <div className="space-y-1">
                <p className="font-medium text-sm">Background</p>
                <p className="text-xs text-muted-foreground">White</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">Buttons & Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Primary Action
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              Secondary Action
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Outline
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Ghost
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
              Destructive
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">Cards & Surfaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Patient Overview</h3>
                <p className="text-sm text-muted-foreground">Daily summary of patient activity.</p>
              </div>
              <div className="p-6 pt-0">
                <p>Content goes here. This card uses the standard card background and border variables.</p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                  View Details
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/50 text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">System Status</h3>
                <p className="text-sm text-muted-foreground">Operational metrics.</p>
              </div>
              <div className="p-6 pt-0">
                <p>This card uses a muted background for differentiation.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
