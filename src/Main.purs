module Main where

import Prelude
import Control.Promise (toAffE)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Effect.Class.Console as Log
import Pytest (appendSysPath, call0, dlOpen, openFile, startInterpreter)

main :: Effect Unit
main =
  launchAff_ do
    liftEffect do
      dlOpen "libpython3.8.so"
      startInterpreter
      appendSysPath "./"
      openFile "test"
    o <- toAffE (call0 "dosklearn")
    Log.info (o :: String)
