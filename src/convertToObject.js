'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString.split(';');

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i].trim();

    if (!rule) {
      continue;
    }

    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
