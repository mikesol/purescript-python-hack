module Pytest where

import Prelude
import Control.Promise (Promise)
import Effect (Effect)

foreign import dlOpen :: String -> Effect Unit

foreign import startInterpreter :: Effect Unit

foreign import appendSysPath :: String -> Effect Unit

foreign import openFile :: String -> Effect Unit

foreign import call0 :: forall z. String -> Effect (Promise z)

foreign import call1 :: forall a z. String -> a -> Effect (Promise z)

foreign import call2 :: forall a b z. String -> a -> b -> Effect (Promise z)

foreign import call3 :: forall a b c z. String -> a -> b -> c -> Effect (Promise z)
