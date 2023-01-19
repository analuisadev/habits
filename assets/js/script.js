const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);

const data = {
  study: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
  water: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
  food: ["01-01", "01-02", "01-06", "01-07", "01-08"],
  game: ["01-01", "01-02", "01-06", "01-07", "01-08"],
  sport: ["01-01", "01-02", "01-06", "01-07", "01-08"]
}

nlwSetup.setData(data);
nlwSetup.load()