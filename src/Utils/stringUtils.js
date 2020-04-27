import React from 'react';

export const formatScore = (score) => {
    // stolen from SO: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
    const si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      let i;
      for (i = si.length - 1; i > 0; i--) {
        if (score >= si[i].value) {
          break;
        }
      }
      return (score / si[i].value).toFixed(1).replace(rx, "$1") + si[i].symbol;
}

export const convertUTCtoString = (utc) => {
    // also stolen from SO: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    const datePosted = new Date(0);
    datePosted.setUTCSeconds(utc);
    
    const today = new Date();
    var seconds = Math.floor((today - datePosted) / 1000);

    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
}

export const parseTextForNewLines = (text) => {
    return text.split('\n').map((item, idx) => (<p key={idx}>{item}</p>))
}