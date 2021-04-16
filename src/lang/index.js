import React, { useContext } from 'react'
const LangContext = React.createContext()

export function useLang() {
	return useContext(LangContext)
}

export const LangProvider = LangContext.Provider
