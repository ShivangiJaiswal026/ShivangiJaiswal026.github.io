import React, {useState, useEffect, useRef} from "react";
import {FaRobot} from "react-icons/fa";
import {RiSendPlane2Fill} from "react-icons/ri";
import {TbArrowsMaximize, TbArrowsMinimize} from "react-icons/tb";
import "./AIChatBot.scss";
import ReactMarkdown from "react-markdown";
import {FaWindowMinimize} from "react-icons/fa6";
import {useGitRepo} from "../../contexts/GitRepoContext";

import {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
} from "../../portfolio";

const chatbotData = {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

const name = `${greeting.username.split(" ")[0]}'s AI`;
const EmptyChat = () => {
  const tags = [
    `I am ${name}`,
    "Meet My Bot",
    "Discover Me",
    "Portfolio Chatbot",
    "Interview My Bot",
    "Ask My AI"
  ];

  return (
    <div className="empty-chat-container">
      <div className="empty-chat-tags">
        {tags.map((tag, index) => (
          <div key={index} className="empty-chat-tag">
            {tag}
          </div>
        ))}
      </div>
      <div className="empty-chat-prompt">
        Meet my bot <span>{name}</span> — your smart guide to me.
      </div>
    </div>
  );
};

const AIChat = ({setShowChat, stack, setStack}) => {
  const {repo} = useGitRepo();

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const messagesEndRef = useRef(null);

  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [stack, loading]);

  const fetchResponse = async userInput => {
    try {
      setLoading(true);
      const initialPrompt = `
                You are ${name}, a chatbot trained to answer questions specifically about my portfolio.
                Treat youself as ${
                  greeting.username
                } and give answer as someone is interviewing you.
                Give well mannered greeting for suitable responses whenever required.
                Your task is to clarify any doubts or questions regarding the portfolio information I provide.

                Instructions (Strictly follow these rules):
                1. Only use the portfolio information I provide below. Do not make assumptions or provide any information that is not in the portfolio.
                2. Respond strictly in React Markdown format as a text/string. Never use code blocks.
                3. Always reply in English.
                4. Be concise, accurate, and clear. Ensure responses are short enough to fit in a small container.
                5. Always format links as a single clickable word in Markdown. Do not display the full URL. Example: [Google](https://google.com)
                6. Bold only headers or key points if necessary. Do not style other text.
                7. If the user asks questions outside the portfolio information, respond exactly: "Sorry, I can't able to assist you with outside information."
                8. Never return an empty response. If any error occurs while generating a response, return: "Model issue - Try again."

                Here is the portfolio information:
                ${JSON.stringify(chatbotData, null, 2)}
                Git Repo Indformation: ${JSON.stringify(repo, null, 2)}

                Now, answer the following questions strictly based on this portfolio information:
            `;

      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{text: initialPrompt + userInput}]
              }
            ]
          })
        }
      );

      if (!geminiResponse.ok) {
        const errorData = await geminiResponse.json();
        console.error("Gemini Model error:", errorData);
        return "⚠️ Error fetching response.";
      }

      const result = await geminiResponse.json();
      return (
        result.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response received."
      );
    } catch (err) {
      console.error("Fetch error:", err);
      return "⚠️ Something went wrong!";
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    const userMessage = prompt;
    setStack(prev => [...prev, {userPrompt: userMessage, response: null}]);
    setPrompt("");

    const aiResponse = await fetchResponse(userMessage);

    setStack(prev => {
      const updated = [...prev];
      updated[updated.length - 1].response = aiResponse;
      return updated;
    });
  };

  const toggleEnlarge = () => {
    setIsEnlarged(prev => !prev);
  };

  return (
    <div
      className={`chat-window glassmorphism ${isEnlarged ? "enlarged" : ""}`}
    >
      <div className="chat-header">
        <div className="header-part">
          <h3 className="header-title">{name}</h3>
          <p className="header-subtitle">Powered by Gemini ✨</p>
        </div>
        <div className="header-controls">
          <button onClick={toggleEnlarge} className="control-button">
            {isEnlarged ? (
              <TbArrowsMinimize size={18} />
            ) : (
              <TbArrowsMaximize size={18} />
            )}
          </button>
          <button
            onClick={() => setShowChat(false)}
            className="control-button close-button"
          >
            <FaWindowMinimize />
          </button>
        </div>
      </div>

      <div className="chat-messages-area">
        {stack.length === 0 ? (
          <EmptyChat />
        ) : (
          stack.map((item, index) => (
            <div key={index} className="message-container">
              <div className="message-user">{item.userPrompt}</div>
              {item.response && (
                <ReactMarkdown className="message-ai">
                  {item.response || "Unale"}
                </ReactMarkdown>
              )}
            </div>
          ))
        )}
        {loading && <div className="loading-indicator">Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Type your message..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
          className="chat-input"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="send-button"
        >
          <RiSendPlane2Fill size={10} />
        </button>
      </div>
    </div>
  );
};

const Bot = ({onClick}) => (
  <div onClick={onClick} className="bot-icon-container">
    <FaRobot size={28} />
  </div>
);

const AIChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [stack, setStack] = useState([]);

  return (
    <>
      {!showChat && <Bot onClick={() => setShowChat(true)} />}
      {showChat && (
        <AIChat stack={stack} setStack={setStack} setShowChat={setShowChat} />
      )}
    </>
  );
};

export default AIChatBot;
