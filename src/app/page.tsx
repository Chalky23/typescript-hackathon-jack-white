"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [hintContent1, setHintContent1] = useState<
    string | React.JSX.Element | null
  >(null);
  const [hintContent2, setHintContent2] = useState<
    string | React.JSX.Element | null
  >(null);
  const [hintContent3, setHintContent3] = useState<
    string | React.JSX.Element | null
  >(null);
  const [hintContent4, setHintContent4] = useState<
    string | React.JSX.Element | null
  >(null);
  const [hintContent5, setHintContent5] = useState<
    string | React.JSX.Element | null
  >(null);

  const Content_1: React.JSX.Element = <p className="hint">use a string!</p>;
  const Content_2: React.JSX.Element = (
    <p className="hint">define the name of your variable and use a number!</p>
  );
  const Content_3: React.JSX.Element = (
    <p className="hint">use a boolean operator!</p>
  );
  const Content_4: React.JSX.Element = (
    <p className="hint">
      remember to interface the object and then input parameters after
    </p>
  );
  const Content_5: React.JSX.Element = (
    <p className="hint">
      define the string inputs, then use them in the array itself
    </p>
  );

  return (
    <div className="page">
      <div className="header">
        <h1>JavaScript and TypeScript Basics</h1>
        <Image
          className="img"
          src="/logos.jpg"
          alt="typescript and javascript logos"
          width="200"
          height="100"
        />
      </div>

      <div className="intro">
        <h2>Is this for you?</h2>
        <p>
          This article on learning TypeScript alongside the basics of JavaScript
          is perfect for anyone starting to learn JavaScript or completely new
          to TypeScript.
          <br /> <br />
          You are going to have to understand the basics of JavaScript, so why
          not compliment it with knowledge of TypeScript from the off! Let us
          dive in!
        </p>
        <p className="emoji" id="introemoji">
          🐬
        </p>
        <h2>What will you learn?</h2>
        <ul>
          <li>
            An understanding of the differences between JavaScript and
            TypeScript and basic definitions.
          </li>
          <li>
            Understand the basic building blocks of JavaScript: variables, data
            types, objects and arrays.
          </li>
          <li>
            Grasp the benefits of using TypeScript as a superset of JavaScript
            code.
          </li>
        </ul>
      </div>
      <div className="main">
        <h2>Basics</h2>
        <div className="js">
          <h3>What is JavaScript?</h3>
          <Image
            src="/JavaScript-logo.png"
            alt="js logo"
            height="50"
            width="50"
          />
        </div>
        <p>
          JavaScript is the{" "}
          <strong>language that makes webpages come alive</strong> by adding
          interactivity, animation and is the engine behind your favourite
          websites. It is a set of instructions that web browsers understand,
          allowing you to create all manner of things on your webpages! While
          you do not see the code itself, this is what runs behind the scenes to
          make these features work.
        </p>
        <div className="js">
          <h3>What is TypeScript?</h3>
          <Image src="/tslogo.webp" alt="ts logo" height="50" width="50" />
        </div>
        <p>
          TypeScript is not a separate language, rather it is a{" "}
          <strong>superset</strong>. This means that all JavaScript in a
          TypeScript file is valid, but it now wants extra notation to keep you
          working safely and efficiently.<br></br>
          <br></br>It achieves this through{" "}
          <strong>static type checking</strong> - in plain English it wants you
          to define the type of information you are inputting so that it can
          automate the checking of that type later on and make sure it has not
          changed. Why? Computers will interpret your code very literally, and
          if given the wrong type it will most likely throw up some errors!
        </p>
        <p className="emoji" id="typeemoji">
          🐟🐟🐟
        </p>
        <h3>Types</h3>
        <p>
          There are several basic <b>types</b> available when using JavaScript,
          including:
        </p>
        <ul>
          <li>
            <b>string:</b> represents textual data e.g. Hello world!
          </li>
          <li>
            <b>number:</b> represents numerical data e.g. 42
          </li>
          <li>
            <b>boolean:</b> represents true or false values. e.g. true
          </li>
        </ul>

        <p>
          Types define the kind of data a variable can hold.<br></br>
          <br></br>
          In JavaScript, they are inferred by the computer by virtue of the
          values you have put in. <br></br>
          <br></br>When using TypeScript, think of them as labels that tell both
          you and the TypeScript compiler what sort of information to expect.
          Here are some of the key benefits of using types:
        </p>
        <ul>
          <li>
            <b>Improved code clarity:</b> By explicitly stating the type of a
            variable, you make your code easier to understand for yourself and
            others. It is immediately clear what kind of data the variable
            represents.
          </li>
          <li>
            <b>Reduced errors:</b> TypeScript performs static type checking.
            This means it analyzes your code before you even run it to identify
            potential type mismatches. Catching these errors early can save you
            a lot of debugging time later.
          </li>
          <li>
            <b>Improved tooling support:</b> Many code editors can provide
            intelligent code completion and refactoring based on the types you
            define. This can significantly improve your development speed and
            efficiency.
          </li>
        </ul>
        <p className="emoji">🦈</p>
        <h2>Variables</h2>
        <p>
          Now to actually use some data in JavaScript. Say we want to write a
          message, this will of course be a <b>string</b>.<br />
          We can do this with either <b>let</b> or <b>const</b>. Do some
          research to find out the difference!
        </p>
        <Image
          src="/js-example-1.png"
          alt="code example"
          height="60"
          width="370"
        />
        <p>
          JavaScript understands that there is a string here. But it will not
          throw an error if that data is redefined later on until we try and run
          the code. It would be better if we could check this as we are writing
          surely? <br />
          <br />
          Enter TypeScript, where we can now define the type and it will do our
          <b> static type checking</b> for us. The way we define this is as
          below:
        </p>
        <Image
          src="/ts-example-1.png"
          alt="code example"
          height="70"
          width="400"
        />
        <p>
          We can use this way of defining types for all{" "}
          <b>primitive data types</b>:
        </p>
        <Image
          src="/example-2.png"
          alt="code example"
          height="200"
          width="350"
        />

        <h2>Objects and Arrays</h2>
        <h3>Objects</h3>
        <p>
          In JavaScript, <b>objects</b> are a collection of key-value pairs.
          This means that we have one object with multiple parameters to it. The
          way that we write these is best shown in an example.
        </p>
        <Image
          src="/js-example-3.png"
          alt="code example"
          height="130"
          width="230"
        />
        <p>
          Again, we need to look at how TypeScript will interpret this. This
          time we need to use <b>interface</b> to define the object at all
          levels, as it can contain any data type within it.{" "}
        </p>
        <Image
          src="/ts-example-3.png"
          alt="code example"
          height="250"
          width="280"
        />
        <p className="emoji" id="objectemoji">
          🐠🐠
        </p>
        <h3>Arrays</h3>
        <p>
          An array is an ordered collection of things. It is ordered by the
          index, taking a numerical position in the array starting from the
          first item at index 0. Items in an array can be of any data type. To
          write an array in JavaScript, you would do it like this:
        </p>
        <Image
          src="/js-example-4.png"
          alt="code example"
          height="60"
          width="350"
        />
        <p>
          In JavaScript, we need to define what types are going to be in the
          array. They can be the same, as in the first example, or different,
          like in the second.
        </p>
        <Image
          src="/ts-example-4.png"
          alt="code example"
          height="80"
          width="480"
        />
        <p className="emoji">🐟</p>
        <h3>Your Task</h3>
        <p>
          Time to put this into practice. Follow this{" "}
          <a href="https://www.typescriptlang.org/play" target="_blank">
            link
          </a>{" "}
          to go to an interactive sandbox where you can test out what you have
          learned. Code some basic TypeScript to satisfy the following:
        </p>
        <ol className="tasks">
          <li>
            A <b>variable</b> of name, where the value is your name.{" "}
            <button onClick={() => setHintContent1(Content_1)}>Hint</button>
            {hintContent1 && <div>{hintContent1}</div>}
          </li>
          <li>
            A <b>variable</b> detailing the number of keys on your keyboard.{" "}
            <button onClick={() => setHintContent2(Content_2)}>Hint</button>
            {hintContent2 && <div>{hintContent2}</div>}
          </li>
          <li>
            A <b>variable</b> of leftHanded, where the value is true or false.{" "}
            <button onClick={() => setHintContent3(Content_3)}>Hint</button>
            {hintContent3 && <div>{hintContent3}</div>}
          </li>
          <li>
            An <b>object</b> detailing your favourite animal. Include values for
            colour, where it lives, and a boolean for if it is an endangered
            species or not.{" "}
            <button onClick={() => setHintContent4(Content_4)}>Hint</button>
            {hintContent4 && <div>{hintContent4}</div>}
          </li>
          <li>
            An <b>array</b> which has the items of your last shopping trip.{" "}
            <button onClick={() => setHintContent5(Content_5)}>Hint</button>
            {hintContent5 && <div>{hintContent5}</div>}
          </li>
        </ol>
        <p className="emoji" id="arrayemoji">
          🐡
        </p>
        <h2>Hungry for more?</h2>
        <p>
          Take a look at these resources for some of the best learning around
          the internet:
        </p>
        <ul>
          <li>
            Test your coding in this sandbox environment!{" "}
            <a href="https://www.typescriptlang.org/play" target="_blank">
              www.typescriptlang.org/play
            </a>
          </li>
          <li>
            It is always good to start with the official docs:{" "}
            <a href="https://www.typescriptlang.org/docs/" target="_blank">
              www.typescriptlang.org/docs/
            </a>
          </li>
          <li>
            One of the best resources for learning new content:{" "}
            <a
              href="https://www.freecodecamp.org/news/learn-typescript-beginners-guide/"
              target="_blank"
            >
              www.freecodecamp.org/news/learn-typescript-beginners-guide/
            </a>
          </li>
          <li>
            Do you prefer learning by video tutorial?{" "}
            <a
              href="https://www.youtube.com/watch?v=gieEQFIfgYc&ab_channel=DaveGray"
              target="_blank"
            >
              www.youtube.com/watch?v=gieEQFIfgYc&ab_channel=DaveGray
            </a>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <p className="emoji" id="footeremoji">
        🦀 🪸 🐙{" "}
      </p>
      <div className="footer"></div>
      <br />
    </div>
  );
}
