"use client";
import { useState } from 'react';
//import "@shadcn/ui/styles.css";  // Import ShadCN styles
import { Button } from '@/components/ui/button';

const words = {
    "Hello": "Namaskaram (నమస్కారం)",
    "GoodBye": "Tata (టాటా)",
    "I'm drink water": "Nenu neellu taguthunanu(నేను నీళ్లు తాగుతున్నాను)",
    "How are you": "Ela unnaru(ఎలా ఉన్నావు)",
    "What are you doing": "Em chesthunavu(ఎం చేస్తున్నావ్)",
    "What are you doing(formal)": "Meru em chesthunaru (మేరు ఎం చేస్తున్నారు)"
};

export default function Home() {
    const [currentTerm, setCurrentTerm] = useState('');
    const [currentDefinition, setCurrentDefinition] = useState('');
    const [isDefinitionVisible, setIsDefinitionVisible] = useState(false);

    const data = Object.entries(words);

    const getRandomTerm = () => {
        const randomEntry = data[Math.floor(Math.random() * data.length)];
        setCurrentTerm(randomEntry[0]);
        setCurrentDefinition(randomEntry[1]);
        setIsDefinitionVisible(false);
    };

    const checkDefinition = () => {
        setIsDefinitionVisible(true);
    };

    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-3xl font-semibold mb-5">Welcome To Telugu Flashcard App!</h1>
            <div className="term text-xl font-medium mb-2 p-4 bg-gray-100 rounded-md shadow-sm">
                <h3>{currentTerm || 'Click Next to start'}</h3>
            </div>
            <div className={`definition text-lg mb-4 p-4 bg-gray-200 rounded-md shadow-sm ${isDefinitionVisible ? 'block' : 'hidden'}`}>
                <h3>{currentDefinition}</h3>
            </div>

            <div className="flex gap-4 mt-4">
                <Button onClick={checkDefinition}>Check Definition</Button>
                <Button onClick={getRandomTerm} variant="secondary">Next Definition</Button>
            </div>
        </div>
    );
}
