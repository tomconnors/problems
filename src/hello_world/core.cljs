(ns hello-world.core
  (:require [reagent.core :as reagent]))

(defonce state (reagent/atom 13))

(defn other-component []
  (reagent/with-let [state* (reagent/atom (js/Date.))
                     interval (js/setInterval (fn [] (reset! state* (js/Date.))) 1000)]
    ;; need to call .toString on Date objects -
    ;; I suppose preact doesn't automatically serialize things.
    [:div "Time:" [:span (str @state*)]]
    (finally
      (js/clearInterval interval))))


(defn main []
  [:div
   [other-component]
   [:p "Number: " @state]
   [:button
    {:type "button"
     :on-click #(swap! state inc)}
    "inc"]])

(defn start []
  (reagent/render [main] (js/document.getElementById "app")))

(start)
