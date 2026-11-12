import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 text-center">
      <Container size="tight">
        <div className="space-y-6 max-w-lg mx-auto">
          <span className="text-6xl sm:text-7xl font-serif italic text-accent font-bold">
            404
          </span>
          <HeadingFormula
            as="h1"
            regularText="Space Not"
            italicText="Found"
            className="text-3xl sm:text-4xl font-bold"
          />
          <p className="text-sm text-muted leading-relaxed">
            The page you are looking for does not exist or may have been relocated. Let’s guide you back to our curated interior catalogue.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
              Return to Homepage
            </Button>
            <Button href="/portfolio" variant="outline" size="md">
              View Project Gallery
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

