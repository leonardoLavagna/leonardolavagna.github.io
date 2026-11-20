---
title: "Recitations and Projects for the courses of Quantum Computing and Neural Networks and Advanced Neural Networks for Industrial Engineering"
collection: teaching
type: "Recitations and Projects for Graduate courses"
permalink: /teaching/2026-QCNN-ANNIE
venue: "Sapienza University of Rome, Master Degrees in Electronics Engineering and Telecommunication Engineering, Master Degree in Industrial/Management Engineering"
date: 2026-09-25
location: "Rome, Italy"
---

On this page, you can find materials related to the recitation sessions and course projects for [Quantum Computing and Neural Networks](https://sites.google.com/uniroma1.it/massimopanella-eng/teaching/qcnn?authuser=0), a course offered within the [Master's Degree programmes in Electronics Engineering and Telecommunications Engineering at Sapienza University of Rome](https://corsidilaurea.uniroma1.it/en/course/33511), and for [Advanced Neural Networks for Industrial Engineering](https://sites.google.com/uniroma1.it/massimopanella-eng/teaching/nnie?authuser=0), a course offered within the [Master Degree in Industrial/Management Engineering](https://corsidilaurea.uniroma1.it/en/course/33512). Both courses are held by Professor Massimo Panella, PhD, with the support of the [NESYA Lab](https://sites.google.com/view/nesya-it). In particular, this page provides supplementary materials covering selected topics in quantum computing, including complementary theoretical concepts, laboratory sessions, project ideas, and related resources.

⚠️ The notebooks are accessible only within the "uniroma1" domain. Thus, to access the material you must use your institutional email and credentials. 

📢 To pass the recitation you should either present a Tutorial having solved all the standard exercises therein (i.e., those not marked with an arrow ↩︎) or carry out one of the proposed Projects solving all the standard problems therein (i.e., those not marked with an arrow ↩︎). In both cases you should "own" the material you present, take responsibility for it and being able to answer technical questions about its contents.

🕚 Office hours: Fridays 11-12.30 Room 110, first floor, building B in the complex of the Engineering Faculty or via meet (link in google classroom). You can also book an appointment writing an email to leonardo.lavagna@uniroma1.it.


## From the Deutsch-Joza algorithm to Simon's problem

As we discussed throughout the course, [quantum computing](https://en.wikipedia.org/wiki/Quantum_computing) has the potential to overcome certain classical computational bottlenecks using principles such as superposition, entanglement, amplitude interference and amplification. In this set of materials we will walk through a number of fundamental quantum algorithms that have been developed in the early ears of quantum computing and where the first to establish provable advantages against classical counterparts. Even if some of these algorithms require [large-scale fault-tolerant quantum computers](https://en.wikipedia.org/wiki/Fault_tolerant_quantum_computing) that are currently being developed and are years away from being available, analyzing them is still a good exercise to deepen the understanding about the inner workings of quantum computational devices from the software perspective, to master key techniques that have been generalized for a plethora of applications and theoretical explorations, but also to use those variants that can be deployed today to prove advantages in the [near-term quantum computers](https://en.wikipedia.org/wiki/Noisy_intermediate-scale_quantum_computing) (see, for instance, [here](https://arxiv.org/abs/1704.00690) and [here](https://arxiv.org/abs/1904.01502)).

We will start with the [oracle model](https://en.wikipedia.org/wiki/Oracle_machine) where parts of an algorithm are seen as given "black-boxes" that can be queried with [O(1)](https://en.wikipedia.org/wiki/Big_O_notation) effort (check also [this paper](https://arxiv.org/abs/cs/0504048)). In these cases, the oracle provides access to a function that is unknown to us, but, at the same time, provides a way of building a new function which can query the oracle to determine the relationship between certain input-output pairs. This is the same idea used in classical computing to "embed" an irreversible computation into a reversible one: for every irreversible [Boolean gate](https://en.wikipedia.org/wiki/Logic_gate) $f:\\{0,1\\}^n\to \\{0,1\\}^m$ (e.g., $f=AND$) the extended function $G_f:\\{0,1\\}^{n+m}\to \\{0,1\\}^{n+m}$ with $m$ [ancillae](https://en.wikipedia.org/wiki/Ancilla_bit) and the XOR gate $\oplus$ such that $G_f(x,y)=(x,y \oplus f(x))$ is bijective with inverse $G^{-1}_f=G_f$ (indeed, $(y \oplus  f(x)) \oplus f(x)= y$). In the quantum setting, this idea translates to the oracle [unitary](https://en.wikipedia.org/wiki/Unitary_operator) $U_f(\lvert x\rangle \lvert y\rangle) = \lvert x\oplus f(y)\rangle$. 

Now, using such an oralce seems like "cheating". Indeed, if $f$ is unknown, how can we build the [quantum circuit](https://en.wikipedia.org/wiki/Quantum_circuit) that implements $U_f$? How can we know if this is an "efficient" circuit? A preliminary answer is that, in the oracle model, querying $U_f$ provides a lower bound on the number of steps needed for the quantum algorithm to solve a certain problem encoded by $f$. This lower bound can then be compared with the number of steps a classical algorithm would require, thus providing a mean to estimate possible advantages. We refer to the notebooks below to investigate further this aspect and to see how the oracle construction helps solving classically hard problems with a quantum computer.

- [Tutorial 1: the Deutsch-Jozsa algorithm](https://colab.research.google.com/drive/1pILHAN3bBQZauXMDXp8tdejoz1You1P9?usp=sharing).
- [Project 1: the Bernstein-Vazirani Algorithm and Simon's problem](https://colab.research.google.com/drive/1BhkHwLeZZaCyQd3kp10kVBfLYgeOiYXA?usp=sharing).

For this part you can refer to (one of the) following manuals and monographs. Further references are provided within each notebook.

**[Nie10]** M. A. Nielsen et al: [Quantum Computation and Quantum Information](https://books.google.it/books/about/Quantum_Computation_and_Quantum_Informat.html?id=-s4DEy7o-a0C&redir_esc=y) (2010) Sections 1.1, 1.4, 5.1, 5.3, 5.4.  
**[Aar18]** S. Aaronson: [Introduction to Quantum Information Science Lecture Notes](https://www.scottaaronson.com/qclec.pdf) (2018) Chapters 18, 19 and 20.      
**[Hid21]** J. Hidary: [Quantum Computing: An Applied approach](https://books.google.it/books/about/Quantum_Computing_An_Applied_Approach.html?id=nkKoxQEACAAJ&redir_esc=y) (2021) Chapters 2 and 8.  
**[Baa23]** B. E. Baaquie et al: [Quantum Computers, Theory and Algorithms](https://books.google.it/books/about/Quantum_Computers.html?id=p_O2zwEACAAJ&redir_esc=y) (2023) Sections 8.4, 8.5 and Chapters 9, 10, 12 and 13.  
**[Pas23]** D. Pastorello: [Concise Guide to Quantum Machine Learning](https://books.google.sm/books?id=_dKkEAAAQBAJ) (2023) Sections 3.3 and 4.1.  
**[Koch25]** A. F. Kochum et al: [Lecture Notes on Quantum Computing](https://arxiv.org/pdf/2311.08445) (2025) Chapter 4 and Tutorial 2.  
**[Wat25]** J. Watrous [Understanding Quantum Information and Computation](https://arxiv.org/abs/2507.11536) (2025) Chapters 5 and 7.   
**[deW26]** R. de Wolf: [Quantum Computing: Lecture Notes](https://arxiv.org/abs/1907.09415) (2026) Chapters 2, 3, 4, 5 and 6.  


## The Stern-Gerlach Experiment and Bell's inequalities

During the course we have underlined multiple times that superposition and entanglement play a crucial role in [quantum information science](https://en.wikipedia.org/wiki/Quantum_information_science). In this set of materials we explore the connection between these quantum-mechanical properties and computational resources. In this sense we want also to point to another key difference between classical computing and contemporary quantum information processing: in the classical setting we can write and implement an algorithm without having to know the physics of, say, the [transistor](https://en.wikipedia.org/wiki/Transistor), in the quantum setting instead, since key parts of the algorithms we want to write and implement are strictly connected to the quantum properties of the underlying hardware, we cannot completely abstract from it. In particular, we will explore the computational consequences of the [EPR paradox](https://en.wikipedia.org/wiki/Einstein%E2%80%93Podolsky%E2%80%93Rosen_paradox) and [Bell's inequalities](https://en.wikipedia.org/wiki/Bell%27s_theorem) with related discussions about the experimental setting and hardware constraints that motivate certain desirable properties of quantum algorithmic operations. 

The first idea we discuss is related to [quantum superposition](https://en.wikipedia.org/wiki/Quantum_superposition) and the [double-slit experiment](https://en.wikipedia.org/wiki/Double-slit_experiment), introducing the simplest two-level object that can be engineered to carry out quantum information processing: the [spin](https://en.wikipedia.org/wiki/Spin_(physics)). This object and its properties where among the first to be harnessed to build the [first quantum computer prototypes](https://en.wikipedia.org/wiki/Timeline_of_quantum_computing_and_communication). Then, we discuss the role of entanglement, studying how a simple set two-qubit entangled states ([Bell pairs](https://en.wikipedia.org/wiki/Bell_state)) can yield unexpected results and themselves harnessed for quantum computing purposes. On the other hand, we will also see how traditional physics experiments that have demonstrated the unintuitive implications of quantum mechanics can be implemented and reproduced by simple quantum algorithms in the circuit model.

- [Tutorial 2: the Stern-Gerlach Experiment and the Spin](https://colab.research.google.com/drive/1BNxd_j8SJheqveMOcJzrwbBXuOJj9w1R?usp=sharing)
- [Project 2: the EPR paradox and Bell's inequalities](https://colab.research.google.com/drive/1aUo3vf4BRLmABHRigp1X4-yS5sg2MeNs?usp=sharing)

For this part you can refer to the following manuals and monographs. Further references are provided within each notebook.

**[Nie10]** M. A. Nielsen et al: [Quantum Computation and Quantum Information](https://books.google.it/books/about/Quantum_Computation_and_Quantum_Informat.html?id=-s4DEy7o-a0C&redir_esc=y) (2010) Sections 1.5, 2.6, and Chapter 7.  
**[Bru13]** N. Brunner et al.: [Bell nonlocality](https://arxiv.org/abs/1303.2849) (2013)
**[Aar18]** S. Aaronson: [Introduction to Quantum Information Science Lecture Notes](https://www.scottaaronson.com/qclec.pdf) (2018) Sections 5.3, 14.1 and Chapter 13.  
**[Hid21]** J. Hidary: [Quantum Computing: An Applied approach](https://books.google.it/books/about/Quantum_Computing_An_Applied_Approach.html?id=nkKoxQEACAAJ&redir_esc=y) (2021) Sections 7.4, Chapters 5 and 8.  
**[Baa23]** B. E. Baaquie et al: [Quantum Computers, Theory and Algorithms](https://books.google.it/books/about/Quantum_Computers.html?id=p_O2zwEACAAJ&redir_esc=y) (2023) Sections 4.8, 4.12, 5.1, 5.2, 5.7 and Chapter 7.  
**[Pas23]** D. Pastorello: [Concise Guide to Quantum Machine Learning](https://books.google.sm/books?id=_dKkEAAAQBAJ) (2023) Chapters 1 and 2.  
**[Wat25]** J. Watrous [Understanding Quantum Information and Computation](https://arxiv.org/abs/2507.11536) (2025) Chapter 4.   
**[deW26]** R. de Wolf: [Quantum Computing: Lecture Notes](https://arxiv.org/abs/1907.09415) (2026) Chapter 17.  

We also encourage you to follow the first couple of lessons [here](https://www.youtube.com/playlist?list=PL701CD168D02FF56F) and [here](https://www.youtube.com/playlist?list=PLUl4u3cNGP61-9PEhRognw5vryrSEVLPr) where you can find many ideas discussed in the above notebooks. 


## Quantum telepathy and magic squares games

Following our discussion of the EPR paradox and Bell's inequalities in the previous set of materials, we now turn to a slightly different question: can quantum entanglement be used not only to produce correlations that cannot be explained classically, but also to accomplish tasks that are impossible to complete with certainty using classical resources? This brings us to the idea of [quantum pseudo-telepathy](https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy), where two separated players, who are not allowed to communicate during a game, can nevertheless exploit previously shared entangled states to coordinate their answers. Of course, no information is actually transmitted between the players, but the correlations produced by their local measurements can lead to rather surprising results. We will investigate one of the most interesting examples of this phenomenon, the [Mermin-Peres Magic Square Game](https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy#The_Mermin%E2%80%93Peres_magic_square_game) and then extend our investigation to a different, although related, family of mathematical objects known as [quantum Latin squares](https://arxiv.org/abs/2501.00196).

- [Tutorial 3: Quantum telepathy and the Mermin-Peres Magic Square Game](https://colab.research.google.com/drive/1OQAu-0PBrmgaGAYDXZb-cL-saCj8O89i?usp=sharing)
- [Project 3: Quantum Latin Squares and Nonlocal Correlations](https://drive.google.com/file/d/1gSLRLYnGUCoMNcCqi56srl2NGv5HYsTR/view?usp=sharing)

For this part you can refer to the following papers and manuals. Further references are provided within each notebook.

**[Hol19]** A. S. Holevo: [Quantum Systems, Channels, Information: A Mathematical Introduction](https://books.google.it/books/about/Quantum_Systems_Channels_Information.html?id=RYlExAEACAAJ&redir_esc=y) (2019) Section 3.2.2
**[Bal22]** P. Ball: [Researchers Use Quantum 'Telepathy' to Win an 'Impossible' Game](https://www.scientificamerican.com/article/researchers-use-quantum-telepathy-to-win-an-impossible-game/) (2022)  
**[Sil23]** : V. Silva: [Quantum Computing by Practice: Python Programming in the Cloud with Qiskit and IBM-Q](https://www.oreilly.com/library/view/quantum-computing-by/9781484299913/) (2023) Chapter 8.
