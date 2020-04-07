import * as React from "react"
import { Typography } from "@material-ui/core"
import { LocalDate, DateTimeFormatter } from "@js-joda/core"
import { Locale } from "@js-joda/locale_en"

import Card from "./Card.component"

interface Props {
  name: string
  questions: string[]
  dayIndex: number
}

const getDateFromDayIndex = (index: number): string => {
  return LocalDate.now()
    .plusDays(index)
    .format(DateTimeFormatter.ofPattern("d MMMM YYYY").withLocale(Locale.US))
}

const QuestionCard = (props: Props) => {
  const { name, questions, dayIndex } = props
  return (
    <>
      <Typography variant="h1" component="h2">
        {name}
      </Typography>
      <Card>
        {dayIndex > 0 ? (
          <Typography>{questions[dayIndex - 1]}</Typography>
        ) : null}
        <Typography variant="h2" component="h2" style={{ textAlign: "center" }}>
          {questions[dayIndex]}
        </Typography>

        <Typography style={{ textAlign: "center", margin: "50px 0 0" }}>
          {getDateFromDayIndex(dayIndex)}
        </Typography>
      </Card>
    </>
  )
}

export default QuestionCard