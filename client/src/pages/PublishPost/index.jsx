import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import dogReceivingAffection from "../../assets/dogReceivingAffection.jpg";
import { AnimalInfoForm } from "../../components/AnimalInfoForm";
import { PostDetailsForm } from "../../components/PostDetailsForm";
import { createPost } from "../../services/createPost";

export function PublishPost() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [postInfos, setPostInfos] = useState({});

  const handleAnimalInfoSubmit = (infos) => {
    setProgress(50);
    setStep(2);
    setPostInfos(infos);
  };

  const handlePostDetailsSubmit = async (infos) => {
    setProgress(100);
    const finalPostInfos = { ...postInfos, ...infos };
    try {
      await createPost(finalPostInfos);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <main className="relative m-auto flex h-screen w-full items-center justify-between text-dark max-xl:justify-center">
      <FiArrowLeft
        className="absolute left-4 top-4 size-8 cursor-pointer text-white transition-colors hover:text-primary max-xl:text-primary"
        onClick={() => navigate("/")}
      />
      <section className="h-full w-1/2 max-xl:hidden">
        <img
          src={dogReceivingAffection}
          alt="Cachorro recebendo carinho"
          className="h-full w-full object-cover shadow-lg"
        />
      </section>
      <section className="m-auto w-96 space-y-6 text-end max-xl:items-center max-xl:gap-4 max-xl:p-4 max-xl:text-center ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-dark">Fazer publicação</h1>
          <p className="text-sm">
            {step === 1
              ? "Primeiro, precisamos de algumas informações sobre o animal"
              : "Agora, adicione mais detalhes sobre o post"}
          </p>
        </div>
        {step === 1 ? (
          <AnimalInfoForm onSubmit={handleAnimalInfoSubmit} />
        ) : (
          <PostDetailsForm onSubmit={handlePostDetailsSubmit} />
        )}
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div
            className="h-2.5 rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </section>
    </main>
  );
}
