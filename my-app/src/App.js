import React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
import Card from "./Card"
import cardData from "./cardData"

export default function App() {
  const cardElements = cardData.map(data => {
    return <Card
      key={data.id}
      {...data}
    />
  })
  return (
    <div>
      <Header />
      <MainContent />
      <section className="section">
        {cardElements}
      </section>

    </div>
  )
}