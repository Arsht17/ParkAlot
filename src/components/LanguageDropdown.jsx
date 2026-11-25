import { useEffect, useId, useRef, useState } from "react";
import { localePaths } from "../locales.js";

const languages = [
  { code: "he", label: "עברית" },
  { code: "en", label: "English" },
];

export default function LanguageDropdown({ label, language }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();
  const selected = languages.find(({ code }) => code === language);

  useEffect(() => {
    if (!open) return;

    menuRef.current.querySelector('[aria-current="page"]').focus({ preventScroll: true });

    function dismissOutside(event) {
      if (!dropdownRef.current.contains(event.target)) setOpen(false);
    }

    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [open]);

  function closeAndFocusTrigger() {
    setOpen(false);
    triggerRef.current.focus({ preventScroll: true });
  }

  function handleKeyDown(event) {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setOpen(true);
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeAndFocusTrigger();
      return;
    }

    if (event.key === "Tab") {
      closeAndFocusTrigger();
      return;
    }

    const options = Array.from(menuRef.current.querySelectorAll("a"));
    const index = options.indexOf(event.target);
    const nextIndex = {
      ArrowDown: (index + 1) % options.length,
      ArrowUp: (index - 1 + options.length) % options.length,
      Home: 0,
      End: options.length - 1,
    }[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    options[nextIndex].focus({ preventScroll: true });
  }

  return (
    <div
      className="footer__language-control"
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="footer__language"
        ref={triggerRef}
        aria-label={`${label}: ${selected.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
      >
        <span lang={language}>{selected.label}</span>
        <svg className="footer__language-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div id={menuId} className="footer__language-menu" ref={menuRef} role="menu" aria-label={label} hidden={!open}>
        {languages.map(({ code, label: optionLabel }) => (
          <a
            key={code}
            href={localePaths[code]}
            hrefLang={code}
            className="footer__language-option"
            role="menuitem"
            aria-current={language === code ? "page" : undefined}
            tabIndex={-1}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              if (language === code) {
                event.preventDefault();
                closeAndFocusTrigger();
              } else {
                event.preventDefault();
                window.location.assign(`${localePaths[code]}#contact`);
              }
            }}
          >
            <span lang={code}>{optionLabel}</span>
            {language === code && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6" />
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
