(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server cljsjs/create-react-class]

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.8.0-alpha2"]]

  :plugins [[lein-figwheel "0.5.14"]
            [lein-cljsbuild "1.1.7"]]

  :source-paths ["src" "target/classes"]

  :figwheel {:http-server-root "public"
             :server-port 3451}

  :resource-paths ["out" "resources"]

  :cljsbuild {:builds
              {:dev
               {:figwheel true
                :source-paths ["src"]
                :compiler {:main "hello-world.core"
                           :output-to "resources/public/out/js/main.js"
                           :asset-path "out/js"
                           :output-dir "resources/public/out/js/"
                           :foreign-libs
                           [{:file "./node_modules/preact/dist/preact.js"
                             :file-min "./node_modules/preact/dist/preact.min.js"
                             :provides ["preact"]}
                            {:file "./node_modules/prop-types/prop-types.js"
                             :file-min "./node_modules/prop-types/prop-types.min.js"
                             :provides ["prop-types"]}
                            {:file "./node_modules/preact-compat/dist/preact-compat.js"
                             :file-min "./node_modules/preact-compat/dist/preact-compat.min.js"
                             :requires ["preact" "prop-types"]
                             :provides ["react" "react-dom" "create-react-class"]
                             :global-exports {create-react-class preactCompat.createClass
                                              react-dom preactCompat
                                              react preactCompat}}]}}
               :prd
               {:source-paths ["src"]
                :compiler {:main "hello-world.core"
                           :optimizations :advanced
                           :pretty-print false
                           :pseudo-names false
                           :output-to "resources/public/out/min/js/main.js"
                           :asset-path "out/min/js"
                           :output-dir "resources/public/out/min/js/"
                           :externs ["./js/preact.ext.js" "./js/preact-compat.ext.js"]
                           :foreign-libs
                           [{:file "./node_modules/preact/dist/preact.js"
                             :file-min "./node_modules/preact/dist/preact.min.js"
                             :provides ["preact"]}
                            {:file "./node_modules/prop-types/prop-types.js"
                             :file-min "./node_modules/prop-types/prop-types.min.js"
                             :provides ["prop-types"]}
                            {:file "./node_modules/preact-compat/dist/preact-compat.js"
                             :file-min "./node_modules/preact-compat/dist/preact-compat.min.js"
                             :requires ["preact" "prop-types"]
                             :provides ["react" "react-dom" "create-react-class"]
                             :global-exports {create-react-class preactCompat.createClass
                                              react-dom preactCompat
                                              react preactCompat}}]}}}})
