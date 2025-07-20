import Image from "next/image";

export default function Page() {
  return (
    <>
      <h2 className={"text-center text-lg font-bold"}>What is this about?</h2>
      <p>Statistical samplig means to draw values of a variable which follow some probability distribution. This variable then being stochastic, its value cannet boe exactly predicted beforehand. Hoever, if many samples are taken, the frequency of each value will be dependent on the corresponding value of the probability distribution for that value.</p>
      <p>Thus, when enough samples are taken, it is possible to sort the samples according to value, and count them (for continuous variables, the main range is divided into smaller intervals, called <i>bins</i>, into which the samples are sorted, and then the number of samples in each bin is counted). When plotted as a histogram, its resulting shape should then to some extend match that of the probability distribution.</p>
      <p>How well the distribution and the samples match, depends on a number of factors. For one this, enough samples must have been taken for sufficient information to have been gained. For another, it may depend on the distribution, in that some distribution functions are more "well-behaved" than others, which mathematically can be used to demonstrate that a set of samlpes will safely converge to the true distribution for increasing numbers of samples.</p>
    </>
  );
}
