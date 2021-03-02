{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "pytest"
, dependencies = [ "aff-promise", "console", "effect", "psci-support" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
