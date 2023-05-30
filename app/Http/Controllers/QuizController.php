<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Models\Question;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        //
        
        return response()->json(['data' => Quiz::all()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreQuizRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreQuizRequest $request)
    {
        // Create a new Quiz object
        // if (Auth::check()) {
        //     return response()->json(['message' => 'Quiz is successfully created'], 200);
        // } else {
        //     return response()->json(['message' => 'Quiz is successfully created'], 200);

        // }
        // $user = Auth::user();

        // $quiz = Quiz::create([
        //     'name' => $request->name,
        //     'description' => $request->description,
        //     'user' => $user->id
        // ]);

        // // Create a new Question object for each question in the quiz
        // $quiz = $request->input('quiz');
        // $answers = collect();
        // foreach ($quiz as $sectionData) {
        //     $question = $sectionData->question;

        //     $newQuestion = Question::create([
        //         'text' => $question,
        //         'quiz' => $quiz->id,
        //         'user' => $user->id
        //     ]);

        //     $answers = $sectionData->answers;
        //     $index = $sectionData->correct_answer_index;

        //     for ($i = 0; $i < count($answers); $i++) {
        //         if ($index === $i) {
        //             $answers->push(['text' => $answers[$i], 'is_correct' => true, 'user' => $user->id]);
        //         }
        //         $answers->push(['text' => $answers[$i], 'is_correct' => false, 'user' => $user->id]);
        //     }

        //     $newQuestion->answers()->createMany($answers);

        //     $answers = collect();
        // }
        // $quiz->questions()->createMany($questions);

        // Redirect the user to the newly created Quiz's show page
        return response()->json(['message' => 'Quiz is successfully created'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function show(Quiz $quiz)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function edit(Quiz $quiz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateQuizRequest  $request
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateQuizRequest $request, Quiz $quiz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz)
    {
        //
    }
}
