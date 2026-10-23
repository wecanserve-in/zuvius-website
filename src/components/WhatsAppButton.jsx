import "./WhatsAppButton.css";

// Floating button that opens a WhatsApp chat with Zuvius.
const WHATSAPP_NUMBER = "918657000206";
const GREETING = "Hello Zuvius Lifesciences, I have an enquiry.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zuvius Lifesciences on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.04 3C9.12 3 3.5 8.6 3.5 15.5c0 2.2.58 4.36 1.69 6.26L3.4 28.5l6.93-1.77a12.6 12.6 0 0 0 5.7 1.37h.01c6.92 0 12.54-5.6 12.54-12.5S22.96 3 16.04 3Zm0 22.98h-.01c-1.87 0-3.7-.5-5.3-1.45l-.38-.22-4.11 1.05 1.1-3.99-.25-.41a10.36 10.36 0 0 1-1.6-5.46c0-5.74 4.68-10.4 10.45-10.4 2.79 0 5.41 1.08 7.39 3.05a10.3 10.3 0 0 1 3.06 7.36c0 5.73-4.69 10.47-10.35 10.47Zm5.73-7.79c-.31-.16-1.86-.92-2.15-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.03 1.28 3.24c.16.21 2.22 3.38 5.37 4.74.75.32 1.34.52 1.8.66.75.24 1.44.2 1.98.12.6-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36Z"
        />
      </svg>
    </a>
  );
}
