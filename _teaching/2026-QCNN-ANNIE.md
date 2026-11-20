---
title: "Recitations and Projects for the courses of Quantum Computing and Neural Networks and Advanced Neural Networks for Industrial Engineering"
collection: teaching
type: "Recitations and Projects for Graduate courses"
permalink: /teaching/2026-QCNN-ANNIE
venue: "Sapienza University of Rome, Master Degrees in Electronics Engineering and Telecommunication Engineering, Master Degree in Industrial/Management Engineering"
date: 2026-09-25
location: "Rome, Italy"
---

On this page, you can find materials (pertaining to quantum computing) related to the recitation sessions and course projects for [Quantum Computing and Neural Networks](https://sites.google.com/uniroma1.it/massimopanella-eng/teaching/qcnn?authuser=0), a course offered within the [Master's Degree programmes in Electronics Engineering and Telecommunications Engineering at Sapienza University of Rome](https://corsidilaurea.uniroma1.it/en/course/33511), and for [Advanced Neural Networks for Industrial Engineering](https://sites.google.com/uniroma1.it/massimopanella-eng/teaching/nnie?authuser=0), a course offered within the [Master Degree in Industrial/Management Engineering](https://corsidilaurea.uniroma1.it/en/course/33512). Both courses are held by [Professor Massimo Panella, PhD](https://massimopanella.site.uniroma1.it/), with the support of the [NESYA Lab](https://sites.google.com/view/nesya-it). In particular, this page provides supplementary materials covering selected topics in quantum computing, including complementary theoretical concepts, laboratory sessions, project ideas, and related resources.

<nav aria-labelledby="contents" markdown="1">

## Contents
{:.no_toc}

* Table of contents
{:toc}

</nav>

## Logistics

⚠️ **The notebooks are accessible only within the "uniroma1" domain.** Thus, to access the material you must use your institutional email and credentials. 

📢 **To pass the recitation you should:** either present a Tutorial having solved all the standard exercises therein (i.e., those not marked with an arrow ↩︎) or carry out one of the proposed Projects solving all the standard problems therein (i.e., those not marked with an arrow ↩︎). In both cases you should "own" the material you present, take responsibility for it and being able to answer technical questions about its contents. Moreover, Tutorials and Projects are usually strictly mutually related, so, we suggest you to check and analyze both materials even if you plan on solving only the exercises in a Tutorial or only the problems in a Project.

🕚 **Office hours:** Fridays 11-12.30 Room 110, first floor, building B in the complex of the Engineering Faculty or via meet (link in google classroom). You can also book an appointment writing an email to *leonardo.lavagna@uniroma1.it*.

⚠️ **Remember to check my homepage (the Activity Box) for days I am Out of Office** as it can happen that I have some commitments that I cannot be absent from and may overlap with the the office hours.


## (1) From the Deutsch-Joza algorithm to Simon's problem 

As we discussed throughout the course, [quantum computing](https://en.wikipedia.org/wiki/Quantum_computing) has the potential to overcome certain classical computational bottlenecks using principles such as superposition, entanglement, amplitude interference and amplification. In this set of materials we will walk through a number of fundamental quantum algorithms that have been developed in the early ears of quantum computing and where the first to establish provable advantages against classical counterparts. Even if some of these algorithms require [large-scale fault-tolerant quantum computers](https://en.wikipedia.org/wiki/Fault_tolerant_quantum_computing) that are currently being developed and are years away from being available, analyzing them is still a good exercise to deepen the understanding about the inner workings of quantum computational devices from the software perspective, to master key techniques that have been generalized for a plethora of applications and theoretical explorations, but also to use those variants that can be deployed today to prove advantages in the [near-term quantum computers](https://en.wikipedia.org/wiki/Noisy_intermediate-scale_quantum_computing) (see, for instance, [here](https://arxiv.org/abs/1704.00690) and [here](https://arxiv.org/abs/1904.01502)).

We will start with the [oracle model](https://en.wikipedia.org/wiki/Oracle_machine) where parts of an algorithm are seen as given "black-boxes" that can be queried with [O(1)](https://en.wikipedia.org/wiki/Big_O_notation) effort (check also [this paper](https://arxiv.org/abs/cs/0504048)). In these cases, the oracle provides access to a function that is unknown to us, but, at the same time, provides a way of building a new function which can query the oracle to determine the relationship between certain input-output pairs. This is the same idea used in classical computing to "embed" an irreversible computation into a reversible one: for every irreversible [Boolean gate](https://en.wikipedia.org/wiki/Logic_gate) $f:\\{0,1\\}^n\to \\{0,1\\}^m$ (e.g., $f=AND$) the extended function $G_f:\\{0,1\\}^{n+m}\to \\{0,1\\}^{n+m}$ with $m$ [ancillae](https://en.wikipedia.org/wiki/Ancilla_bit) and the XOR gate $\oplus$ such that $G_f(x,y)=(x,y \oplus f(x))$ is bijective with inverse $G^{-1}_f=G_f$ (indeed, $(y \oplus  f(x)) \oplus f(x)= y$). In the quantum setting, this idea translates to the oracle [unitary](https://en.wikipedia.org/wiki/Unitary_operator) $U_f\lvert x\rangle \lvert y\rangle = \lvert x\oplus f(y)\rangle$. 

Now, using such an oralce seems like "cheating". Indeed, if $f$ is unknown, how can we build the [quantum circuit](https://en.wikipedia.org/wiki/Quantum_circuit) that implements $U_f$? How can we know if this is an "efficient" circuit? A preliminary answer is that, in the oracle model, querying $U_f$ provides a lower bound on the number of steps needed for the quantum algorithm to solve a certain problem encoded by $f$. This lower bound can then be compared with the number of steps a classical algorithm would require, thus providing a mean to estimate possible advantages. We refer to the notebooks below to investigate further this aspect and to see how the oracle construction helps solving classically hard problems with a quantum computer and how it impacts [quantum machine learning](https://en.wikipedia.org/wiki/Quantum_machine_learning).

- [Tutorial 1: the Deutsch-Jozsa algorithm](https://colab.research.google.com/drive/1pILHAN3bBQZauXMDXp8tdejoz1You1P9?usp=sharing).
- [Project 1.1: The Deutsch-Jozsa algorithm as a Quantum Feature Extractor](https://colab.research.google.com/drive/1V9LcswUA0jXCQgyzAVBE9x-Twa1yJ6Mw?usp=sharing)
- [Project 1.2: the Bernstein-Vazirani Algorithm and Simon's problem](https://colab.research.google.com/drive/1BhkHwLeZZaCyQd3kp10kVBfLYgeOiYXA?usp=sharing).

For this part you can refer to (one of the) following manuals and monographs. Further references are provided within each notebook.

**[Nie10]** M. A. Nielsen et al: [Quantum Computation and Quantum Information](https://books.google.it/books/about/Quantum_Computation_and_Quantum_Informat.html?id=-s4DEy7o-a0C&redir_esc=y) (2010) Sections 1.1, 1.4, 5.1, 5.3, 5.4.  
**[Aar18]** S. Aaronson: [Introduction to Quantum Information Science Lecture Notes](https://www.scottaaronson.com/qclec.pdf) (2018) Chapters 18, 19 and 20.      
**[Hid21]** J. Hidary: [Quantum Computing: An Applied approach](https://books.google.it/books/about/Quantum_Computing_An_Applied_Approach.html?id=nkKoxQEACAAJ&redir_esc=y) (2021) Chapters 2 and 8.  
**[Baa23]** B. E. Baaquie et al: [Quantum Computers, Theory and Algorithms](https://books.google.it/books/about/Quantum_Computers.html?id=p_O2zwEACAAJ&redir_esc=y) (2023) Sections 8.4, 8.5 and Chapters 9, 10, 12 and 13.  
**[Pas23]** D. Pastorello: [Concise Guide to Quantum Machine Learning](https://books.google.sm/books?id=_dKkEAAAQBAJ) (2023) Sections 3.3 and 4.1.  
**[Koch25]** A. F. Kochum et al: [Lecture Notes on Quantum Computing](https://arxiv.org/pdf/2311.08445) (2025) Chapter 4 and Tutorial 2.  
**[Wat25]** J. Watrous [Understanding Quantum Information and Computation](https://arxiv.org/abs/2507.11536) (2025) Chapters 5 and 7.   
**[deW26]** R. de Wolf: [Quantum Computing: Lecture Notes](https://arxiv.org/abs/1907.09415) (2026) Chapters 2, 3, 4, 5 and 6.  


## (2) The Stern-Gerlach Experiment and Bell's inequalities

During the course we have underlined multiple times that superposition and entanglement play a crucial role in [quantum information science](https://en.wikipedia.org/wiki/Quantum_information_science). In this set of materials we explore the connection between these quantum-mechanical properties and computational resources. In this sense we want also to point to another key difference between classical computing and contemporary quantum information processing: in the classical setting we can write and implement an algorithm without having to know the physics of, say, the [transistor](https://en.wikipedia.org/wiki/Transistor), in the quantum setting instead, since key parts of the algorithms we want to write and implement are strictly connected to the quantum properties of the underlying hardware, we cannot completely abstract from it. In particular, we will explore the computational consequences of the [EPR paradox](https://en.wikipedia.org/wiki/Einstein%E2%80%93Podolsky%E2%80%93Rosen_paradox) and [Bell's inequalities](https://en.wikipedia.org/wiki/Bell%27s_theorem) with related discussions about the experimental setting and hardware constraints that motivate certain desirable properties of quantum algorithmic operations. 

The first idea we discuss is related to [quantum superposition](https://en.wikipedia.org/wiki/Quantum_superposition) and the [double-slit experiment](https://en.wikipedia.org/wiki/Double-slit_experiment), introducing the simplest two-level object that can be engineered to carry out quantum information processing: the [spin](https://en.wikipedia.org/wiki/Spin_(physics)). This object and its properties where among the first to be harnessed to build the [first quantum computer prototypes](https://en.wikipedia.org/wiki/Timeline_of_quantum_computing_and_communication). Then, we discuss the role of entanglement, studying how a simple set two-qubit entangled states ([Bell pairs](https://en.wikipedia.org/wiki/Bell_state)) can yield unexpected results and themselves harnessed for quantum computing purposes. On the other hand, we will also see how traditional physics experiments that have demonstrated the unintuitive implications of quantum mechanics can be implemented and reproduced by simple quantum algorithms in the circuit model. We conclude this set of materials going back to some aspects discussed in (1) about the quantum machine learning implications of quantum objects (encodings, feature maps, oracles, etc...) in the context of the experiments and properties introduced in the following tutorial.

- [Tutorial 2: the Stern-Gerlach Experiment and the Spin](https://colab.research.google.com/drive/1BNxd_j8SJheqveMOcJzrwbBXuOJj9w1R?usp=sharing)
- [Project 2.1: the EPR paradox and Bell's inequalities](https://colab.research.google.com/drive/1aUo3vf4BRLmABHRigp1X4-yS5sg2MeNs?usp=sharing)
- [Project 2.2: Quantum Representations, Readouts, and Learning](https://colab.research.google.com/drive/1_40uF0xnEP0vLWU_F9mv4CmB1unj3ELt?usp=sharing)

For this part you can refer to the following manuals and monographs. Further references are provided within each notebook.

**[Nie10]** M. A. Nielsen et al: [Quantum Computation and Quantum Information](https://books.google.it/books/about/Quantum_Computation_and_Quantum_Informat.html?id=-s4DEy7o-a0C&redir_esc=y) (2010) Sections 1.5, 2.6, and Chapter 7.  
**[Bru13]** N. Brunner et al.: [Bell nonlocality](https://arxiv.org/abs/1303.2849) (2013)
**[Aar18]** S. Aaronson: [Introduction to Quantum Information Science Lecture Notes](https://www.scottaaronson.com/qclec.pdf) (2018) Sections 5.3, 14.1 and Chapter 13.  
**[Hid21]** J. Hidary: [Quantum Computing: An Applied approach](https://books.google.it/books/about/Quantum_Computing_An_Applied_Approach.html?id=nkKoxQEACAAJ&redir_esc=y) (2021) Sections 7.4, Chapters 5 and 8 (except Section 8.6).  
**[Baa23]** B. E. Baaquie et al: [Quantum Computers, Theory and Algorithms](https://books.google.it/books/about/Quantum_Computers.html?id=p_O2zwEACAAJ&redir_esc=y) (2023) Sections 4.8, 4.12, 5.1, 5.2, 5.7 and Chapter 7.  
**[Pas23]** D. Pastorello: [Concise Guide to Quantum Machine Learning](https://books.google.sm/books?id=_dKkEAAAQBAJ) (2023) Chapters 1 and 2.  
**[Wat25]** J. Watrous [Understanding Quantum Information and Computation](https://arxiv.org/abs/2507.11536) (2025) Chapter 4.   
**[deW26]** R. de Wolf: [Quantum Computing: Lecture Notes](https://arxiv.org/abs/1907.09415) (2026) Chapter 17.  

We also encourage you to follow the first couple of lessons [here](https://www.youtube.com/playlist?list=PL701CD168D02FF56F) and [here](https://www.youtube.com/playlist?list=PLUl4u3cNGP61-9PEhRognw5vryrSEVLPr) where you can find many ideas discussed in the above notebooks. 


## (3) Quantum nonlocality, square games, pseudo-telepathy and teleportation

Following our discussion of the EPR paradox and Bell's inequalities in the previous set of materials, we now turn to a slightly different question: can quantum entanglement be used not only to produce correlations that cannot be explained classically, but also to accomplish tasks that are impossible to complete with certainty using classical resources? This brings us to the idea of [quantum pseudo-telepathy](https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy), where two separated players, who are not allowed to communicate during a game, can nevertheless exploit previously shared entangled states to coordinate their answers. Of course, no information is actually transmitted between the players, but the correlations produced by their local measurements can lead to rather surprising results. We will investigate one of the most interesting examples of this phenomenon, the [Mermin-Peres Magic Square Game](https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy#The_Mermin%E2%80%93Peres_magic_square_game) and then extend our investigation to a different, although related, family of mathematical objects known as [quantum latin squares](https://arxiv.org/abs/2501.00196). These topics open a window view on [(quantum) game theory](https://en.wikipedia.org/wiki/Quantum_game_theory) and related [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) applications.

Starting from the same quantum resources, we will also investigate another interesting application of entanglement: [quantum teleportation](https://en.wikipedia.org/wiki/Quantum_teleportation). At first glance, the possibility of transferring an unknown quantum state from one party to another without physically transmitting the corresponding qubit might seem to contradict some of the principles we have discussed, particularly the [no-cloning theorem](https://en.wikipedia.org/wiki/No-cloning_theorem) and the impossibility of communicating information faster than light. However, as we will see, quantum teleportation does not violate either of these principles. The idea is that Alice and Bob initially share an entangled pair of qubits, which Alice can exploit to perform a joint measurement in the Bell basis and communicate its outcome to Bob through a classical channel. Using just two classical bits, Bob can then apply a suitable correction to recover the original quantum state on his qubit. Unlike the pseudo-telepathy games introduced above, where communication between the players is forbidden, teleportation explicitly requires classical communication to complete the protocol. In the accompanying project, we will derive the mathematical steps of this procedure and implement the corresponding quantum circuit using Qiskit, investigating the role of Bell measurements, conditional quantum operations and classical communication. This will also provide an opportunity to revisit the EPR paradox discussed in (2) from a different perspective, showing how entanglement can be used as a practical resource for quantum information processing without allowing instantaneous communication or the creation of copies of an unknown quantum state.

- [Tutorial 3: Quantum telepathy and the Mermin-Peres Magic Square Game](https://colab.research.google.com/drive/1OQAu-0PBrmgaGAYDXZb-cL-saCj8O89i?usp=sharing)
- [Project 3.1: Quantum Latin Squares and Nonlocal Correlations](https://drive.google.com/file/d/1gSLRLYnGUCoMNcCqi56srl2NGv5HYsTR/view?usp=sharing)
- [Project 3.2: Quantum Teleportation](https://colab.research.google.com/drive/11v5fminwMGjuvFHpihaaMe-m47zPuAxc?usp=sharing)

For this part you can refer to the following papers and manuals. Further references are provided within each notebook.

**[Pet07]** D. Petz: [Quantum Information Theory and Quantum Statistics](https://books.google.it/books?id=Tu2Ztb2PXqoC) (2007) Sections 4.1 and 4.2.  
**[Nie10]** M. A. Nielsen et al: [Quantum Computation and Quantum Information](https://books.google.it/books/about/Quantum_Computation_and_Quantum_Informat.html?id=-s4DEy7o-a0C&redir_esc=y) (2010) Section 1.3.7.  
**[Hol19]** A. S. Holevo: [Quantum Systems, Channels, Information: A Mathematical Introduction](https://books.google.it/books/about/Quantum_Systems_Channels_Information.html?id=RYlExAEACAAJ&redir_esc=y) (2019) Section 3.2.2  
**[Hid21]** J. Hidary: [Quantum Computing: An Applied approach](https://books.google.it/books/about/Quantum_Computing_An_Applied_Approach.html?id=nkKoxQEACAAJ&redir_esc=y) (2021) Chapter 7.    
**[Bal22]** P. Ball: [Researchers Use Quantum 'Telepathy' to Win an 'Impossible' Game](https://www.scientificamerican.com/article/researchers-use-quantum-telepathy-to-win-an-impossible-game/) (2022)   
**[Aar18]** S. Aaronson: [Introduction to Quantum Information Science Lecture Notes](https://www.scottaaronson.com/qclec.pdf) (2018) Chapter 10.     
**[Ozy26]** M. M. Özyılmaz et al.: [Nonlocal Games Revisited: A Representation-Theoretic Path from Bell Locality to Quantum Pseudo-Telepathy](https://arxiv.org/abs/2604.09458) (2026)  
**[Nat26]** H. Natur et al.: [Quantum Coordination and Nonlocal Games: Theory and Applications](https://arxiv.org/abs/2608.09540) (2026)


## (4) Quantum decision trees and Random Forests

Throughout the course, we have discussed how quantum computing can provide alternative approaches to computational problems by exploiting superposition, entanglement and interference. In this set of materials, we will move towards [machine learning](https://en.wikipedia.org/wiki/Machine_learning), investigating how some well-established classical learning algorithms can be reformulated or extended within the quantum computational framework. We will start with [decision trees](https://en.wikipedia.org/wiki/Decision_tree_learning), one of the simplest and most intuitive approaches to supervised learning, where a prediction is obtained through a sequence of decisions that progressively partition the input data according to selected features. Despite their relatively simple structure, decision trees introduce several important concepts, such as information gain, entropy, impurity measures and the trade-off between model complexity and generalization. We will then extend this discussion to [random forests](https://en.wikipedia.org/wiki/Random_forest), where multiple decision trees are combined into an ensemble to improve predictive performance and reduce the sensitivity of individual models to the training data. 

Starting from these classical constructions, we will investigate how similar ideas can be extended to [quantum machine learning](https://en.wikipedia.org/wiki/Quantum_machine_learning), focusing on quantum decision trees and quantum random forests. An interesting question is whether quantum computers can provide advantages not only in representing and processing information, but also in the learning procedures used to construct predictive models. To explore this possibility, we will discuss different approaches proposed in the literature. We will also investigate how ensemble-learning strategies can be generalized to combine quantum models, and how these approaches compare with their classical counterparts in terms of predictive accuracy, computational complexity and resource requirements. Of course, replacing parts of a classical learning algorithm with quantum operations does not automatically provide a [computational advantage](https://arxiv.org/abs/2311.05559). In particular, the cost of encoding classical data into quantum states, the number of measurements required to obtain predictions, and the limitations of contemporary quantum hardware can significantly affect the overall performance. 

- [Tutorial 4: Quantum Decision Trees](https://colab.research.google.com/drive/1Odg3udhil1GO5iGijwX2akGXMC3ZgPJD?usp=sharing)
- [Project 4.1: Quantum Random Forests](https://colab.research.google.com/drive/1YH9JOChMUzMRIyPKsQwpK_rZ4EXHaRYz?usp=sharing)

For this part you can refer to the following papers and manuals. Further references are provided within each notebook.

**[Bre84]** L. Breiman et al.: [Classification and Regression Trees](https://books.google.it/books/about/Classification_and_Regression_Trees.html?id=JwQx-WOmSyQC&redir_esc=y) (1984).  
**[Qui86]** J. R. Quinlan: [Induction of decision trees](https://link.springer.com/article/10.1023/A:1022643204877) (1986).  
**[Bre01]** L. Breiman: [Random Forests](https://link.springer.com/article/10.1023/A:1010933404324) (2001).  
**[Has09]** T. Hastie et al.: [The Elements of Statistical Learning Data Mining, Inference, and Prediction](https://link.springer.com/book/10.1007/978-0-387-84858-7) (2009) Chapter 8.  
**[Xie17]** Z. Xie et al.: [A Quantum-Inspired Ensemble Method and Quantum-Inspired Forest Regressors](https://arxiv.org/abs/1711.08117) (2017).  
**[Sch19]** M. Schuld et. al., [Quantum Machine Learning in Feature Hilbert Spaces](https://arxiv.org/abs/1803.07128) (2019).   
**[Sch20]** M. Schuld et al., [Circuit-Centric Quantum Classifiers](https://arxiv.org/abs/1804.00633) (2020).  
**[Sch21]** M. Schuld, et al.: [Machine Learning with Quantum Computers](https://link.springer.com/book/10.1007/978-3-030-83098-4) (2021) Sections 2.1, 2.2, 2.5, 4.5, 5.1, 5.2, 5.4, 6.1, 6.2.  


## (5) Grover's algorithm, Sudoku and (constrained) SAT problems

Following our discussion in (1) of the oracle model through the Deutsch-Jozsa, Bernstein-Vazirani and Simon's algorithms, we now turn to another fundamental result in quantum computing: [Grover's search algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm). While the previous algorithms exploit quantum interference to extract information about certain properties of an unknown function, Grover's algorithm addresses a slightly different problem: given a function that allows us to recognize a solution, can we find that solution more efficiently than by checking all possible candidates? In the classical setting, searching an unstructured space of $N$ elements requires $O(N)$ queries in the worst case, whereas Grover's algorithm reduces this complexity to $O(\sqrt{N})$ quantum queries when there is a unique marked element. The idea is to use a quantum oracle to mark the desired solutions through a phase change and then repeatedly apply an [amplitude amplification](https://en.wikipedia.org/wiki/Amplitude_amplification) procedure that increases their probability of being measured. An interesting aspect of this construction is that the oracle does not need to know the solution in advance, but only how to recognize it. This brings us back to a question we raised when introducing the oracle model: if we assume that querying the oracle requires constant effort, are we really accounting for the computational cost of solving the problem? Indeed, while Grover's algorithm provides a provable quadratic advantage in query complexity, implementing the corresponding oracle as a reversible quantum circuit may itself require a considerable amount of computational resources. We will therefore investigate both the mathematical principles behind amplitude amplification and the practical implications of constructing and executing such an algorithm on a quantum computer.

To explore these ideas, we will consider the popular [Sudoku puzzle](https://en.wikipedia.org/wiki/Sudoku), which provides an interesting example of a [constraint satisfaction problem](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem). The objective is to assign a value to each empty cell of a grid while satisfying a set of constraints involving rows, columns and subgrids. From the computational perspective, Sudoku is particularly interesting because, while finding a valid assignment may require exploring a large number of possibilities, checking whether a candidate satisfies the rules is relatively straightforward. We can therefore construct a [Boolean function](https://en.wikipedia.org/wiki/Boolean_function) that evaluates these constraints and use it to implement the oracle required by Grover's algorithm. In the accompanying notebooks, we will start from small Sudoku instances, translate their rules into reversible Boolean operations and construct a quantum circuit that marks valid assignments before applying amplitude amplification to identify a solution. This will also allow us to revisit the role of ancillary qubits, reversible computation and phase kickback, which we have already encountered in the previous algorithms, and to understand how apparently simple logical constraints can translate into relatively complex quantum circuits. Of course, this does not mean that quantum computers are necessarily better at solving Sudoku than classical ones. In fact, contemporary classical solvers can exploit the structure of the puzzle through constraint propagation, backtracking and other specialized techniques, rather than blindly searching through all possible assignments. Nevertheless, the example provides a useful opportunity to distinguish between theoretical quantum advantages and practical computational performance, and to investigate how Grover's algorithm can be generalized to other combinatorial search and optimization problems where the size of the solution space makes exhaustive enumeration particularly expensive.

- [Tutorial 5: Grover's algorithm](https://colab.research.google.com/drive/1ljPifWZkThtboki47OlE_XZSQjbncBXI?usp=sharing)
- [Project 5.1: Solving sudoku (and constraint satisfaction problems) on a quantum computer with Grover's algorithm](https://colab.research.google.com/drive/1VrIUoceNzgwTECR_nDUwhyvnBBDFVwly?usp=sharing)

For this part you can refer to the following papers and manuals. Further references are provided within each notebook.

**[Por13]** R. Portugal: [Quantum Walks and Search Algorithms](https://books.google.ch/books?id=0F5qDwAAQBAJ) (2013).  
**[Gir16]** P.R. Giri et al.: [A Review on Quantum Search Algorithms](https://arxiv.org/abs/1602.02730) (2016).  
**[Nie10]** M. A. Nielsen et al: [Quantum Computation and Quantum Information](https://books.google.it/books/about/Quantum_Computation_and_Quantum_Informat.html?id=-s4DEy7o-a0C&redir_esc=y) (2010) Sections 1.4.5 and Chapter 6.  
**[Aar18]** S. Aaronson: [Introduction to Quantum Information Science Lecture Notes](https://www.scottaaronson.com/qclec.pdf) (2018) Chapters 22, 23 and 24.   
**[Hid21]** J. Hidary: [Quantum Computing: An Applied approach](https://books.google.it/books/about/Quantum_Computing_An_Applied_Approach.html?id=nkKoxQEACAAJ&redir_esc=y) (2021) Chapter 2 and Section 8.6.  
**[Baa23]** B. E. Baaquie et al: [Quantum Computers, Theory and Algorithms](https://books.google.it/books/about/Quantum_Computers.html?id=p_O2zwEACAAJ&redir_esc=y) (2023) Chapter 11.  
**[Pas23]** D. Pastorello: [Concise Guide to Quantum Machine Learning](https://books.google.sm/books?id=_dKkEAAAQBAJ) (2023) Sections 3.3 and 4.2.  
**[Koch25]** A. F. Kochum et al: [Lecture Notes on Quantum Computing](https://arxiv.org/pdf/2311.08445) (2025) Chapter 2.   
**[Wat25]** J. Watrous [Understanding Quantum Information and Computation](https://arxiv.org/abs/2507.11536) (2025) Chapter 8.     
**[deW26]** R. de Wolf: [Quantum Computing: Lecture Notes](https://arxiv.org/abs/1907.09415) (2026) Section 2.4, Chapters 7 and 8.  

We also strongly suggest you to watch [this amazing youtube video](https://www.youtube.com/watch?v=RQWpF2Gb-gU).
