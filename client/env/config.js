// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rpp';
