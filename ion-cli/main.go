// Copyright (c) 2018 Clearmatics Technologies Ltd

package main

import (
  "os"
  "fmt"
	"github.com/clearmatics/ion/ion-cli/cli"
)

func main() {
  // If args provided just execute
  if (len(os.Args) > 1) {
    cli.Execute()
  // else Launch the CLI
  } else {
    printWelcome()
    cli.Launch()
  }
}

func printWelcome() {
	// display welcome info.
	fmt.Println("===============================================================")
	fmt.Print("Ion Command Line Interface\n\n")
	fmt.Println("Use 'help' to list commands")
	fmt.Println("===============================================================")
}
