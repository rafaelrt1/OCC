define(
  ['jquery', 'knockout'],
  function($,ko) {
    'use strict';
  return {
      textInput: ko.observable("Banner rotativo com 4 imagens"),
      textDefault: ko.observable("Usuário não masculino ou não logado"),
      textMale: ko.observable("Usuário masculino e logado")
  }
});