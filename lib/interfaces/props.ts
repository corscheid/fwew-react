/**
 * This file is part of fwew-react.
 * fwew-react: Fwew Na'vi Dictionary app written using React Native
 * Copyright (C) 2021  Corey Scheideman <corscheid@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { FwewError } from './fwew-error'
import { Word } from './word'

/**
 * props interface for ActionBar component
 */
export interface ActionBarProps {
  children?: JSX.Element | JSX.Element[]
}

/**
 * props interface for EntryBreakdown component
 */
export interface EntryBreakdownProps {
  stressed: string
  syllables: string
  infixDots: string
}

/**
 * props interface for EntryIndex component
 */
export interface EntryIndexProps {
  number: number
}

/**
 * props interface for EntryModalContent component
 */
export interface EntryModalContentProps {
  entry: Word
}

/**
 * props for Entry component
 */
export interface EntryProps {
  number: number
  word: Word
}

/**
 * props for Screen component
 */
export interface ScreenProps {
  apiUrl: string
  screenType: 'list' | 'random'
}

/**
 * props for Sressed component
 */
export interface StressedProps {
  stressed: string
  children: string
}

/**
 * props for Underline component
 */
export interface UnderlineProps {
  children: string | JSX.Element | JSX.Element[]
}

/**
 * props for WordList component
 */
export interface WordListProps {
  data: Word[]
  err: FwewError
  isLoading: boolean
  onRefresh: () => void
  text: string
  toggleModal: (item: Word) => void
  posFilterEnabled: boolean
}

/**
 * props for If component
 */
export interface IfProps {
  condition: (() => boolean) | boolean
  children: JSX.Element | JSX.Element[]
}