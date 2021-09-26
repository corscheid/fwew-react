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

import {
  SettingsFwew,
  SettingsFwewDisplayNames,
  SettingsGlobal,
  SettingsList,
  SettingsListOperatorDisplayNames,
  SettingsRandom
} from '../lib/interfaces/settings'

/**
 * Global settings
 *
 * languageCode: the default language code of the application
 */
export const settingsGlobal: SettingsGlobal = {
  languageCode: 'en'
}

/**
 * Global settings items display names
 */
export const settingsGlobalDisplayNames: SettingsGlobal = {
  languageCode: 'language code'
}

/**
 * Fwew Settings
 *
 * isReverseEnabled: the default search direction
 * posFilterText: the default value of the part of speech filter
 */
export const settingsFwew: SettingsFwew = {
  isReverseEnabled: false,
  posFilterText: 'all'
}

/**
 * Fwew Settings items display names
 */
export const settingsFwewDisplayNames: SettingsFwewDisplayNames = {
  isReverseEnabled: 'reverse',
  posFilterText: 'part of speech filter'
}

/**
 * List Settings
 *
 * values for each what/cond/spec in List
 */
export const settingsList: SettingsList = {
  word: {
    starts: '',
    ends: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notHas: '',
    notLike: ''
  },
  pos: {
    starts: '',
    ends: '',
    is: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notIs: '',
    notHas: '',
    notLike: ''
  },
  syllables: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  stress: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  words: {
    first: '0',
    last: '0'
  }
}

/**
 * List Settings item display names
 */
export const settingsListDisplayNames: SettingsList = {
  word: {
    starts: 'starts with',
    ends: 'ends with',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  pos: {
    starts: 'starts with',
    ends: 'ends with',
    is: 'is exactly',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notIs: 'is exactly not',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  syllables: {
    lessThan: 'less than (<)',
    lessThanEqual: 'at most (≤)',
    equal: 'exactly (=)',
    greaterThanEqual: 'at least (≥)',
    greaterThan: 'more than (>)',
    notEqual: 'exactly not (≠)'
  },
  stress: {
    lessThan: 'less than (<)',
    lessThanEqual: 'at most (≤)',
    equal: 'exactly (=)',
    greaterThanEqual: 'at least (≥)',
    greaterThan: 'more than (>)',
    notEqual: 'exactly not (≠)'
  },
  words: {
    first: 'first #',
    last: 'last #'
  }
}

/** List Settings items display names */
export const settingsListOperatorDisplayNames: SettingsListOperatorDisplayNames = {
  word: 'word shape',
  pos: 'part of speech',
  syllables: 'number of syllables',
  stress: 'stressed syllable',
  words: 'words released'
}

/**
 * Random Settings
 *
 * values for each what/cond/spec in Random
 */
export const settingsRandom: SettingsRandom = {
  numRandomWords: '8',
  word: {
    starts: '',
    ends: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notHas: '',
    notLike: ''
  },
  pos: {
    starts: '',
    ends: '',
    is: '',
    has: '',
    like: '',
    notStarts: '',
    notEnds: '',
    notIs: '',
    notHas: '',
    notLike: ''
  },
  syllables: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  stress: {
    lessThan: '0',
    lessThanEqual: '0',
    equal: '0',
    greaterThanEqual: '0',
    greaterThan: '0',
    notEqual: '0'
  },
  words: {
    first: '0',
    last: '0'
  }
}

/**
 * Random Settings item display names
 */
export const settingsRandomDisplayNames = {
  numRandomWords: '# random words',
  word: {
    starts: 'starts with',
    ends: 'ends with',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  pos: {
    starts: 'starts with',
    ends: 'ends with',
    is: 'is exactly',
    has: 'has',
    like: 'is like',
    notStarts: 'does not start with',
    notEnds: 'does not end with',
    notIs: 'is exactly not',
    notHas: 'does not have',
    notLike: 'is not like'
  },
  syllables: {
    lessThan: '<',
    lessThanEqual: '≤',
    equal: '=',
    greaterThanEqual: '≥',
    greaterThan: '>',
    notEqual: '≠'
  },
  stress: {
    lessThan: '<',
    lessThanEqual: '≤',
    equal: '=',
    greaterThanEqual: '≥',
    greaterThan: '>',
    notEqual: '≠'
  },
  words: {
    first: 'first',
    last: 'last'
  }
}
