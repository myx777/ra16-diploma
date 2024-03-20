// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable @typescript-eslint/no-restricted-imports */

/**
 *  Этот файл служит центральным узлом для повторного экспорта предварительно набранных хуков Redux.
// Этот импорт ограничен в других местах, чтобы обеспечить единообразие
// использование типизированных перехватчиков во всем приложении.
// Здесь мы отключаем правило ESLint, потому что это назначенное место
// для импорта и реэкспорта типизированных версий хуков.
/ eslint-disable @typescript-eslint/no-restricted-imports /
 */
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../types/StoreTypes"



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()