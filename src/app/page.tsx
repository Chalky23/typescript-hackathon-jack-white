import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
          is perfect for anyone new to either JavaScript or TypeScript.
        </p>
        <h2>What will you learn?</h2>
        <ul>
          <li>
            An understanding of the differences between JavaScript and
            TypeScript and basic definitions.
          </li>
          <li>
            Understand the basic building blocks of JavaScript: variables, data
            types, functions.
          </li>
          <li>Be comfortable working with objects and arrays in JavaScript.</li>
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
          websites. It's a set of instructions that web browsers understand,
          allowing you to create all manner of things on your webpages! While
          you won't see the code itself, it's what runs behind the scenes to
          make these features work.
        </p>
        <div className="js">
          <h3>What is TypeScript?</h3>
          <Image src="/tslogo.webp" alt="ts logo" height="50" width="50" />
        </div>
        <p>
          TypeScript is not a separate language, rather it is a{" "}
          <strong>superset</strong>. This means that all JavaScript in a
          TypeScript file is valid, but it now wants extra to keep you working
          safely and efficiently.<br></br>
          <br></br>It achieves this through{" "}
          <strong>static type checking</strong> - in plain English it wants you
          to define the type of information you are inputting so that it can
          automate the checking of that type later on and make sure it hasn't
          changed. Why? Computers will interpret your code very literally, and
          if you've given the wrong type to something it will most likely throw
          up some errors!
        </p>

        <h3>Types</h3>
        <p>
          There are several basic <b>types</b> available when using JavaScript,
          including:
        </p>
        <ul>
          <li>
            <b>string:</b> represents textual data e.g. "Hello world!"
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
            others. It's immediately clear what kind of data the variable
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
        <h2></h2>
      </div>
    </div>
  );
}
