import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import CardComponent from "../components/card/CardComponent";
import Button from "../components/button/Button";
import CreateCardModalCombined from "../components/modal/CreateCardModalCombined";



function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Initialize cards state with your existing dummy data
  const [cards, setCards] = useState([
    {
      targetRole: "Frontend Developer",
      yearsOfExperience: "3-5",
      topicsToFocusOn: "React JavaScript CSS",
      description: "Cover all the basic questions for a frontend developer role, focusing on core web technologies and modern frameworks."
    },
    {
      targetRole: "Backend Engineer",
      yearsOfExperience: "5-7",
      topicsToFocusOn: "Node.js Python Databases APIs",
      description: "Deep dive into backend architecture, database design, and API development with practical examples."
    },
    {
      targetRole: "DevOps Specialist",
      yearsOfExperience: "2-4",
      topicsToFocusOn: "AWS Docker Kubernetes CI/CD",
      description: "Understand continuous integration, deployment, and cloud infrastructure management."
    },
    {
      targetRole: "Frontend Developer",
      yearsOfExperience: "3-5",
      topicsToFocusOn: "React JavaScript CSS",
      description: "Cover all the basic questions for a frontend developer role, focusing on core web technologies and modern frameworks."
    },
    {
      targetRole: "Backend Engineer",
      yearsOfExperience: "5-7",
      topicsToFocusOn: "Node.js Python Databases APIs",
      description: "Deep dive into backend architecture, database design, and API development with practical examples."
    },
    {
      targetRole: "DevOps Specialist",
      yearsOfExperience: "2-4",
      topicsToFocusOn: "AWS Docker Kubernetes CI/CD",
      description: "Understand continuous integration, deployment, and cloud infrastructure management."
    },
    {
      targetRole: "Frontend Developer",
      yearsOfExperience: "3-5",
      topicsToFocusOn: "React JavaScript CSS",
      description: "Cover all the basic questions for a frontend developer role, focusing on core web technologies and modern frameworks."
    },
    {
      targetRole: "Backend Engineer",
      yearsOfExperience: "5-7",
      topicsToFocusOn: "Node.js Python Databases APIs",
      description: "Deep dive into backend architecture, database design, and API development with practical examples."
    },
    {
      targetRole: "DevOps Specialist",
      yearsOfExperience: "2-4",
      topicsToFocusOn: "AWS Docker Kubernetes CI/CD",
      description: "Understand continuous integration, deployment, and cloud infrastructure management."
    }
  ]);

  const onOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  // FIX: This function now correctly adds the new card data to the 'cards' state
  const onCreateCard = (newCardData) => {
    setCards((prevCards) => [...prevCards, newCardData]);
    console.log("New card created:", newCardData); // Optional: log the new card data
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {/* Map over the 'cards' state to render each CardComponent */}
        {cards.map((card, index) => (
          <CardComponent
            key={index} // Using index as key is acceptable for static lists, but a unique ID is preferred if available
            targetRole={card.targetRole}
            yearsOfExperience={card.yearsOfExperience}
            topicsToFocusOn={card.topicsToFocusOn}
            description={card.description}
          />
        ))}
      </div>
      <Button
        variant="solid"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 px-6 py-3 rounded-full shadow-xl text-base font-semibold z-50"
        onClick={onOpen} // This correctly opens the modal
      >
        + Add new
      </Button>

      <CreateCardModalCombined isOpen={isModalOpen} onClose={onClose} onCreateCard={onCreateCard} />
    </>
  );
}

export default HomePage;