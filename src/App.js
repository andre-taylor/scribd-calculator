import React from "react"
import { Calculator } from "./components"

import styles from "./App.module.css"

const App = () => {
  return (
    <main className={styles.app}>
      <Calculator />
    </main>
  )
}

export default App
