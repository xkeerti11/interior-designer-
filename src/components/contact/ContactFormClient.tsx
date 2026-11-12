"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Upload,
  X,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export const ContactFormClient: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Full Home Turnkey Interior");
  const [neighborhood, setNeighborhood] = useState("Civil Lines");
  const [message, setMessage] = useState("");

  // Local file preview state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("Please select a file smaller than 10MB");
        return;
      }
      setSelectedFile(file);
      if (file.type.startsWith("image/")) {
        setFilePreviewUrl(URL.createObjectURL(file));
      } else {
        setFilePreviewUrl(null);
      }
      setErrorMessage("");
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
      setFilePreviewUrl(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate clean local client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappText = `Hello WALL & DECO, I submitted an interior enquiry on your website:
- Name: ${name}
- Phone: ${phone}
- Project Type: ${projectType}
- Area: ${neighborhood}, Prayagraj
${message ? `- Notes: ${message}` : ""}
${selectedFile ? `- Note: I have a floor plan file (${selectedFile.name}) ready to share.` : ""}`;

  return (
    <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-sm">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-ink">Thank You, {name}!</h3>
            <p className="text-sm text-muted leading-relaxed">
              Your consultation request for <strong>{projectType}</strong> in <strong>{neighborhood}</strong> has been registered. Our Prayagraj design team will reach out within 4 business hours.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-canvas border border-border-subtle max-w-md mx-auto text-left space-y-2 text-xs">
            <span className="text-[11px] uppercase tracking-wider font-bold text-muted block">
              Want Instant Response?
            </span>
            <p className="text-muted leading-relaxed">
              Connect with our senior designer directly on WhatsApp with your enquiry details pre-filled.
            </p>
            <Button
              href={formatWhatsAppUrl(COMPANY.phone, whatsappText)}
              external
              variant="primary"
              size="md"
              className="w-full justify-center mt-2"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Continue to WhatsApp Chat
            </Button>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setName("");
                setPhone("");
                setMessage("");
                removeFile();
              }}
              className="text-xs text-muted hover:text-ink underline"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">
              Free Site Measurement & Estimate
            </span>
            <h3 className="text-2xl font-bold text-ink">Book an In-Person Consultation</h3>
            <p className="text-xs sm:text-sm text-muted">
              Fill out this form or reach our team directly via phone or WhatsApp.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 text-red-800 text-xs flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink block mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-canvas border border-border-subtle text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-ink block mb-1.5">
                Phone Number (10 Digits) *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-canvas border border-border-subtle text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-ink block mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-canvas border border-border-subtle text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-ink block mb-1.5">
                Project Type
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-canvas border border-border-subtle text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 cursor-pointer"
              >
                <option value="Full Home Turnkey Interior">Full Home Turnkey Interior</option>
                <option value="Modular Kitchen Design">Modular Kitchen Design</option>
                <option value="PVC / WPC Wall Louvers">PVC / WPC Wall Louvers</option>
                <option value="UV Marble Sheets">UV Marble Sheets</option>
                <option value="uPVC Windows & Doors">uPVC Windows & Doors</option>
                <option value="Commercial / Office Space">Commercial / Office Space</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-ink block mb-1.5">
              Locality in Prayagraj
            </label>
            <select
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-canvas border border-border-subtle text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 cursor-pointer"
            >
              {COMPANY.neighborhoodsServed.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
              <option value="Other Area in Prayagraj">Other Area in Prayagraj</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-ink block mb-1.5">
              Tell Us About Your Space (Dimensions, Requirements, Timeline)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. 3BHK flat in Civil Lines, looking for fluted TV paneling and parallel kitchen by next month..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-canvas border border-border-subtle text-base sm:text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
            />
          </div>

          {/* Local Floor Plan Preview (PRD Mandate: Local preview only) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-ink block">
              Attach Room Photo or Floor Plan (Local In-Browser Preview)
            </label>
            <div className="border-2 border-dashed border-border-subtle rounded-2xl p-5 text-center bg-canvas/60 hover:bg-canvas transition-colors">
              {selectedFile ? (
                <div className="flex items-center justify-between gap-4 p-2 bg-surface rounded-xl border border-border-subtle">
                  <div className="flex items-center gap-3">
                    {filePreviewUrl ? (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border">
                        <Image
                          src={filePreviewUrl}
                          alt="Local preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <Upload className="w-6 h-6 text-accent shrink-0 ml-2" />
                    )}
                    <div className="text-left text-xs">
                      <span className="font-semibold text-ink block truncate max-w-[200px]">
                        {selectedFile.name}
                      </span>
                      <span className="text-muted">
                        {(selectedFile.size / 1024).toFixed(1)} KB (Ready to share on WhatsApp)
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 text-muted hover:text-red-600 rounded-full hover:bg-black/5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block space-y-1.5">
                  <Upload className="w-6 h-6 text-muted mx-auto" />
                  <span className="text-xs font-semibold text-accent block">
                    Upload Floor Plan or Room Image
                  </span>
                  <span className="text-[11px] text-muted block">
                    PNG, JPG or PDF up to 10MB (Rendered locally in your browser)
                  </span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <p className="text-[10px] text-muted leading-tight">
              * In Phase 1, files are kept safe locally in your browser memory and will not be stored on remote servers.
            </p>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full justify-center"
          >
            {isSubmitting ? "Processing Enquiry..." : "Request Site Measurement & Estimate"}
          </Button>
        </form>
      )}
    </div>
  );
};

