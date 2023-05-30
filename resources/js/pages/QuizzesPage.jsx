import {
    Box,
    Card,
    CardContent,
    IconButton,
    CircularProgress,
    Button,
    Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormRow from "../components/form/FormRow";
import { useLayoutContext } from "../context/LayoutContext";
import Utilities from "../core/Utilities";
import RequestEngine from "../core/RequestEngine";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const requestEngine = new RequestEngine();

const QuizzesPage = () => {
    const { setPageTitle } = useLayoutContext();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        name: "",
        description: "",
        quiz: [{ question: "", answers: ["", ""], correct_answer_index : 0 }],
    });

    useEffect(() => {
        setPageTitle("Quizzes");
    }, []);

    const onChange = (e) => {
        setData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value };
        });
    };

    const addQuestion = () => {
        setData((prevData) => {
            return {
                ...prevData,
                quiz: [...data.quiz, { question: "", answers: ["", ""], correct_answer_index: 0 }],
            };
        });
    };

    const removeQuestion = (index, _) => {
        setData((prevData) => {
            const updatedQuiz = prevData.quiz.filter((_, i) => i !== index);
            return { ...prevData, quiz: updatedQuiz };
        });
    };

    const handleQuestionChange = (index, event) => {
        const updatedQuiz = data.quiz.map((section, i) => {
            if (i !== index) {
                return section;
            }
            return { ...section, question: event.target.value };
        });
        setData((prevData) => ({ ...prevData, quiz: updatedQuiz }));
    };

    const removeAnswer = (sectionIndex, answerIndex, _) => {
        setData((prevData) => ({
            ...prevData,
            quiz: prevData.quiz.map((section, i) => {
                if (i !== sectionIndex) {
                    return section;
                }
                return {
                    ...section,
                    answers: section.answers.filter(
                        (answer, j) => j !== answerIndex
                    ),
                };
            }),
        }));
    };

    const handleAnswerChange = (sectionIndex, answerIndex, event) => {
        const updatedQuiz = data.quiz.map((section, i) => {
            if (i !== sectionIndex) {
                return section;
            }
            const updatedAnswers = [...section.answers];
            updatedAnswers[answerIndex] = event.target.value;
            return { ...section, answers: updatedAnswers };
        });
        setData((prevData) => ({ ...prevData, quiz: updatedQuiz }));
    };

    const addAnswer = (sectionIndex, _) => {
        setData((prevData) => ({
            ...prevData,
            quiz: prevData.quiz.map((section, i) => {
                if (i !== sectionIndex) {
                    return section;
                }
                return {
                    ...section,
                    answers: section.answers.concat(""),
                };
            }),
        }));
    };

    const handleSave = async () => {
        if (!data.name || !data.description) {
            Utilities.showErrorMessage("Please enter all fields");
            return;
        }

        // if (!data.questions.length >= 5) {
        //     Utilities.showErrorMessage("Please enter a minimum of 5 questions");
        // }

        setLoading(true);

        const response = await requestEngine.postData("quiz", data);

        setLoading(false);

        console.log(response);
    };
    
    return (
        <Box>
            <Card>
                <CardContent>
                    {/* <Box mb={2}>

                    </Box> */}
                    <FormRow
                        size="small"
                        type="text"
                        name="name"
                        label="Name"
                        onChange={onChange}
                        placeholder="Enter title"
                        value={data.name}
                    />
                    <FormRow
                        size="small"
                        type="text"
                        name="description"
                        label="Description"
                        onChange={onChange}
                        placeholder="Enter description"
                        value={data.description}
                    />
                    {data.quiz.map((section, index) => (
                        <Box>
                            <Box
                                display="flex"
                                gap={1}
                                alignItems={"center"}
                                key={index}
                            >
                                <Box width="100%">
                                    <FormRow
                                        size="small"
                                        name="question"
                                        label={`Question ${index + 1}`}
                                        value={section.question}
                                        placeholder={"Enter question"}
                                        onChange={(event) =>
                                            handleQuestionChange(index, event)
                                        }
                                    />
                                </Box>
                                <IconButton
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    sx={{
                                        position: "relative",
                                        top: "5px",
                                    }}
                                    onClick={(event) => addAnswer(index, event)}
                                >
                                    <AddIcon size="small" />
                                </IconButton>
                                {index !== 0 && (
                                    <IconButton
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        sx={{
                                            position: "relative",
                                            top: "5px",
                                        }}
                                        onClick={(event) =>
                                            removeQuestion(index, event)
                                        }
                                    >
                                        <DeleteIcon size="small" />
                                    </IconButton>
                                )}
                            </Box>
                            <Grid container spacing={2}>
                                {section.answers.map((answer, index_) => {
                                    return (
                                        <Grid
                                            item
                                            xs
                                            alignItems={"center"}
                                            key={index_}
                                        >
                                            <Box display="flex" gap={1} alignItems="center">
                                                <Box width="100%">
                                                    <FormRow
                                                        size="small"
                                                        name="answer"
                                                        label={`Answer ${
                                                            index + 1
                                                        }.${index_ + 1}`}
                                                        value={answer}
                                                        placeholder={
                                                            "Enter answer"
                                                        }
                                                        onChange={(event) =>
                                                            handleAnswerChange(
                                                                index,
                                                                index_,
                                                                event
                                                            )
                                                        }
                                                    />
                                                </Box>
                                                {index_ === 0 ||
                                                index_ === 1 ? null : (
                                                    <IconButton
                                                        variant="contained"
                                                        color="secondary"
                                                        size="small"
                                                        sx={{
                                                            position:
                                                                "relative",
                                                            top: "5px",
                                                        }}
                                                        onClick={(event) =>
                                                            removeAnswer(
                                                                index,
                                                                index_,
                                                                event
                                                            )
                                                        }
                                                    >
                                                        <DeleteIcon size="small" />
                                                    </IconButton>
                                                )}
                                            </Box>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>
                    ))}
                    <IconButton
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={addQuestion}
                    >
                        <AddIcon size="small" />
                    </IconButton>
                    <Box mt={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={handleSave}
                        >
                            Save
                            {loading && (
                                <CircularProgress
                                    size={12}
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        marginTop: "-6px",
                                        marginLeft: "-6px",
                                    }}
                                />
                            )}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default QuizzesPage;
