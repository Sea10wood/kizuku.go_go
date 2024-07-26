package main

import (
  "encoding/json"
  "log"
  "net/http"
)

type Question struct {
  ID      int    `json:"id"`
  Content string `json:"content"`
}

var questions []Question
var nextID = 1

func handleQuestions(w http.ResponseWriter, r *http.Request) {
  switch r.Method {
  case http.MethodGet:
    getQuestions(w)
  case http.MethodPost:
    postQuestion(w, r)
  default:
    http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
  }
}

func getQuestions(w http.ResponseWriter) {
  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(questions)
}

func postQuestion(w http.ResponseWriter, r *http.Request) {
  var question Question
  if err := json.NewDecoder(r.Body).Decode(&question); err != nil {
    http.Error(w, err.Error(), http.StatusBadRequest)
    return
  }
  question.ID = nextID
  nextID++
  questions = append(questions, question)
  w.WriteHeader(http.StatusCreated)
  json.NewEncoder(w).Encode(question)
}

func main() {
  http.HandleFunc("/api/questions", handleQuestions)
  log.Println("Server started on :8080")
  log.Fatal(http.ListenAndServe(":8080", nil))
}
