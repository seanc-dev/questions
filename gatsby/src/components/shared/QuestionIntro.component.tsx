import * as React from "react"
import { Typography, Button } from "@material-ui/core"

import Card from "./Card.component"

interface Props {
  numberOfQuestions: number
  start: () => void
}

const QuestionIntro = (props: Props) => {
  const { numberOfQuestions, start } = props

  return (
    <Card>
      <Typography variant="h2">
        {numberOfQuestions} day question challenge
      </Typography>
      <Typography>
        Here will be some introductory text explaining how this thing works..
      </Typography>
      <p style={{ textAlign: "center", marginTop: 50 }}>
        <Button
          variant="outlined"
          onClick={() => {
            start()
          }}
        >
          Get started
        </Button>
      </p>
    </Card>
  )
}

export default QuestionIntro