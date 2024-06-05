"use client";

import { useState } from "react";
import { ChatBox } from "@/components/ChatBox";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import { AiCompanion } from "@/components/AiCompanion";

export default function Home() {
  const [messages, setMessages] = useState("Hi, I am Ai Companion.");
  const handleSendMessage = (newMessage: string) => {
    setMessages(newMessage);
  };

  return (
    <>
      <AiCompanion messages={messages} />
      <WeeklyCalendar />
      <ChatBox onSend={handleSendMessage} />
    </>
  );
}
