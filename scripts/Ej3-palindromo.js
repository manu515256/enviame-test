let palindromos = (input, j, k) => {
  while (j >= 0 && k < input.length) {
    if (input[j] != input[k]) {
      break;
    }
    console.log(input.substring(j, k + 1));
    j--;
    k++;
  }
};

let palindromos = (input) => {
  for (let i = 0; i < input.length; i++) {
    palindromos(input, i - 1, i + 1);
    palindromos(input, i, i + 1);
  }
};


let palindrome = "afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood";

palindromos(palindrome);
