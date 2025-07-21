export default function Page() {
  return (
    <>
      <h2 className={"text-center text-lg font-bold"}>What is sampling?</h2>
      <p>Statistical samplig means to draw values of a variable which follow some probability distribution. This variable then being stochastic, its value cannet boe exactly predicted beforehand. However, if many samples are taken, the frequency of each value will be dependent on the corresponding value of the probability distribution for that value.</p>
      <p>Thus, when enough samples are taken, it is possible to sort the samples according to value, and count them (for continuous variables, the main range is divided into smaller intervals, called <i>bins</i>, into which the samples are sorted, and then the number of samples in each bin is counted). When plotted as a histogram, its resulting shape should then to some extend match that of the probability distribution.</p>
      <p>How well the distribution and the samples match, depends on a number of factors. For one this, enough samples must have been taken for sufficient information to have been gained. For another, it may depend on the distribution, in that some distribution functions are more &quot;well-behaved&quot; than others, which mathematically can be used to demonstrate that a set of samlpes will safely converge to the true distribution for increasing numbers of samples.</p>
      <h3 className={"font-bold"}>What can you find here</h3>
      <p>Here you can find a <i>sampling tool</i>, which allows you to choose from an array of probability distributions, select parameters with which to instantiate them, and then to fetch samples from its (resulting) domain. When these samples are treated properly (and assuming that there are enough of them), these samples give a representable illustration of what their underlying probability distribution looks like. For the purpose of illustration, the probability distribution is helpfully superposed onto the sample data.</p>
      <p>For reference, you may also find information about, arguably, the most important probability distributions (incidentally, those which are available for sampling), to get some sort of intuition about what to expect from the sampling.</p>
    </>
  );
}
