import { useState } from "react";
import "./App.css";

function App() {
  const [surprise, setSurprise] = useState(false);
  const [secret, setSecret] = useState(false);
  const [reply, setReply] = useState("");

  return (
    <div className="page">
      <div className="floating-hearts">
        {["💗", "💕", "💖", "🌸", "✨", "💞", "🌷", "🫶"].map(
          (heart, i) => (
            <span key={i} style={{ "--i": i }}>
              {heart}
            </span>
          )
        )}
      </div>

      <main className="card">
        <div className="top-label">A LITTLE SURPRISE FOR YOU</div>

        <div className="doraemon">🐱💙</div>

        <h1>Hey Shrabani!</h1>

        <p className="nickname">
          My favourite Doraemon 🫣💖
        </p>

        <div className="divider"></div>

        <h2>Just wanted to tell you...</h2>

        <p className="message">
          Some people have a special way of making
          an ordinary day feel beautiful.
          <br /><br />
          And honestly, you are one of those people. 🌷
        </p>

        <button
          className="main-button"
          onClick={() => setSurprise(!surprise)}
        >
          {surprise ? "Close surprise 💌" : "Open your surprise 💌"}
        </button>

        {surprise && (
          <div className="surprise-box">
            <h2>One more thing... 💗</h2>

            <p>
              Never stop smiling, Shrabani.
              Your smile is genuinely special.
              Keep shining, Doraemon! ✨
            </p>

            <p className="love-note">
              You deserve all the happiness in the world. 🫶
            </p>

            <h3>Did I make you smile? 🙈</h3>

            <div className="buttons">
              <button onClick={() => setReply("Yayyy! Mission successful! 🥹💖")}>
                Yesss! 💗
              </button>

              <button onClick={() => setReply("Haha, I know you smiled! 😂")}>
                Maybeee 🙈
              </button>
            </div>

            {reply && <p className="reply">{reply}</p>}

            <button
              className="secret-button"
              onClick={() => setSecret(!secret)}
            >
              {secret ? "Hide secret 💌" : "One last thing... 🤫"}
            </button>

            {secret && (
              <div className="secret-message">
                <div className="secret-heart">💖</div>
                <h2>Dear Doraemon,</h2>
                <p>
                  I don't know how to explain it,
                  but talking to you makes things
                  a little more special.
                  <br /><br />
                  So keep smiling, okay?
                  Someone is secretly wishing you
                  the best every day. 🫣
                </p>
                <h3>– From someone who thinks you're special 💗</h3>
              </div>
            )}
          </div>
        )}

        <div className="footer">
          Made with a little thought & lots of smiles ♥
        </div>
      </main>

      <p className="bottom-text">
        P.S. Keep this smile forever, Doraemon! 🌸
      </p>
    </div>
  );
}

export default App;