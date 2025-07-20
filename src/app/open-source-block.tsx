import React from "react";

export default function OpenSourceBlock({ onClose }: { onClose: () => void }) {
  return (
    <div id="opensource-block">
      <img id="close" src="/imgs/x.svg" alt="Close" onClick={onClose} />
      <div style={{ width: "100%" }}>
        <p>
          <span id="cheers">Cheers!</span>
          <br />
          jesuisplate.com est maintenant opensource!
        </p>
        <div id="btn-container">
          <a
            href="https://github.com/sharkdarras/jesuisplate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir
          </a>
        </div>
      </div>
      <img id="budlight" src="/imgs/budlight.png" alt="Budlight" />
    </div>
  );
}
