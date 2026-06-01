import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const questions = [
  {
    question: "Los op: 3x + 5 = 20. Wat is x?",
    answers: ["5", "7", "15"],
    correct: "5",
  },
  {
    question: "Welke zin is correct gespeld?",
    answers: ["Onmiddelijk", "Onmiddellijk", "Onmidellijk"],
    correct: "Onmiddellijk",
  },
  {
    question: "Wat is de chemische formule van water?",
    answers: ["CO2", "H2O", "O2"],
    correct: "H2O",
  },
  {
    question: "Wat is 15% van 200?",
    answers: ["25", "30", "35"],
    correct: "30",
  },
  {
    question: "Welke staatsvorm heeft België?",
    answers: ["Republiek", "Absolute monarchie", "Parlementaire monarchie"],
    correct: "Parlementaire monarchie",
  },
  {
    question: "Wat is de verleden tijd van ‘worden’?",
    answers: ["werd", "wordde", "wierd"],
    correct: "werd",
  },
  {
    question: "Welke planeet staat bekend als de rode planeet?",
    answers: ["Venus", "Mars", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "Wat betekent ‘democratie’ letterlijk?",
    answers: ["Volksmacht", "Koningsmacht", "Wetenschap"],
    correct: "Volksmacht",
  },
  {
    question: "Wat is de uitkomst van 2² + 3²?",
    answers: ["12", "13", "25"],
    correct: "13",
  },
  {
    question: "Welke taal is geen Romaanse taal?",
    answers: ["Frans", "Spaans", "Duits"],
    correct: "Duits",
  },
];

export default function GameScreen() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    if (gameOver) return;

    if (answer === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion =
      Math.floor(Math.random() * questions.length);

    setCurrentQuestion(nextQuestion);
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(60);
    setCurrentQuestion(0);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slimme Schoolquiz</Text>

      <View style={styles.stats}>
        <Text style={styles.stat}>Score: {score}/10</Text>
        <Text style={styles.stat}>Tijd: {timeLeft}s</Text>
      </View>

      {!gameOver ? (
        <>
          <Text style={styles.question}>
            {questions[currentQuestion].question}
          </Text>

          {questions[currentQuestion].answers.map((answer) => (
            <TouchableOpacity
              key={answer}
              style={styles.answerButton}
              onPress={() => handleAnswer(answer)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>
            {score >= 10
              ? "Proficiat! Je hebt gewonnen! 🎉"
              : "Game Over 😢"}
          </Text>

          <Text style={styles.resultScore}>
            Eindscore: {score}/10
          </Text>

          <TouchableOpacity
            style={styles.restartButton}
            onPress={restartGame}
          >
            <Text style={styles.restartText}>Opnieuw spelen</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 25,
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 30,
    color: "#111",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  stat: {
    fontSize: 20,
    fontWeight: "700",
    color: "#82C51B",
  },
  question: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
    color: "#111",
    fontWeight: "600",
  },
  answerButton: {
    backgroundColor: "#82C51B",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
  },
  answerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  resultBox: {
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
  },
  resultScore: {
    fontSize: 24,
    marginBottom: 25,
  },
  restartButton: {
    backgroundColor: "#82C51B",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  restartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});