import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LostAndFound } from "../../components/LostAndFound";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <Header onSearch={handleSearch} />
      <LostAndFound searchTerm={searchTerm} />
      <Footer />
    </main>
  );
}
