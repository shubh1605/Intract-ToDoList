<template>
    <div>
        <div v-if="!showForm">
            <div id="addNewContainer">
                <button id="addNew" @click="toggleAddNewForm">
                    Add new task
                </button>
            </div>
        </div>
        <div v-else>
            <div id="addNewContainer">
                <button id="addNew" @click="toggleAddNewForm">
                    Cancel
                </button>
            </div>

            <div id="containerBox">
                <v-card-text>
                    <div id="app">
                        <v-app id="inspire">
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-text-field
                            v-model="task"
                            :counter="10"
                            :rules="GenRules"
                            placeholder="Task"
                            required
                            ></v-text-field>
                        
                            <v-text-field
                            v-model="completeBy"
                            :rules="GenRules"
                            placeholder="Complete by"
                            required
                            ></v-text-field>

                           <v-select
                            v-model="category"
                            :items="items"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                            ></v-select>
                        
                            <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validate"
                            >
                            Submit
                            </v-btn>
                        
                            <v-btn
                            color="error"
                            class="mr-4"
                            @click="reset"
                            >
                            Reset Form
                            </v-btn>
                        
                        </v-form>
                        </v-app>
                    </div>
                </v-card-text>
            </div>
        </div>
        
        <div v-if="this.num_tasks.Education != 0">
            <div id="showTasksContainer">
                <div v-if="!showEducation"> 
                    <button id="showTasks" @click ="showEducationTasks">
                        Show education
                    </button>
                </div>
                <div v-else>
                    <button id="showTasks" @click ="showEducationTasks">
                        Hide education
                    </button>
                  
                    <div> 
                        <div v-for="(item, index) in tasks" :key="item" :class="{completedTaskDetails: item.completed, taskDetails: !item.completed}">
                            <div v-if="item.category == 'Education'">                        
                                <div >                                
                                    <v-card class="mx-auto" max-width="360" tile @dblclick="changeToCompleted(item)">
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                            <v-list-item-title class="TaskHead"><span id="noneDisplay"> {{index}} ) </span> {{item.task}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.completeBy}}  <button id="deleteTask" @click="removeTask(item)"> Done </button></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                    <br>
                                </div>               
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
                
            </div>
        </div>

        <div v-if="this.num_tasks.Work != 0">
            <div id="showTasksContainer">
                <div v-if="!showWork"> 
                    <button id="showTasks" @click ="showWorkTasks">
                        Show work
                    </button>
                </div>
                <div v-else>
                    <button id="showTasks" @click ="showWorkTasks">
                        Hide work
                    </button>
                  
                    <div> 
                        <div v-for="(item, index) in tasks" :key="item" :class="{completedTaskDetails: item.completed, taskDetails: !item.completed}">                        
                            <div v-if="item.category == 'Work'"> 
                                <div @dblclick="changeToCompleted(item)">                            
                                    <v-card class="mx-auto" max-width="360" tile>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                            <v-list-item-title><span id="noneDisplay"> {{index}} ) </span> {{item.task}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.completeBy}}  <button id="deleteTask" @click="removeTask(item)"> Done </button></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                    <br>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>

        <div v-if="this.num_tasks.Fitness != 0">
            <div id="showTasksContainer">
                <div v-if="!showFitness"> 
                    <button id="showTasks" @click ="showFitnessTasks">
                        Show fitness
                    </button>
                </div>
                <div v-else>
                    <button id="showTasks" @click ="showFitnessTasks">
                        Hide fitness
                    </button>
                  
                    <div> 
                        <div v-for="(item, index) in tasks" :key="item" :class="{completedTaskDetails: item.completed, taskDetails: !item.completed}">                        
                            <div v-if="item.category == 'Fitness'"> 
                                <div @dblclick="changeToCompleted(item)">
                                
                                    <v-card class="mx-auto" max-width="360" tile>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                            <v-list-item-title><span id="noneDisplay"> {{index}} ) </span> {{item.task}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.completeBy}}  <button id="deleteTask" @click="removeTask(item)"> Done </button></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                    <br>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>

        <div v-if="this.num_tasks.Medicine != 0">
            <div id="showTasksContainer">
                <div v-if="!showMedicine"> 
                    <button id="showTasks" @click ="showMedicineTasks">
                        Show medicine
                    </button>
                </div>
                <div v-else>
                    <button id="showTasks" @click ="showMedicineTasks">
                        Hide medicine
                    </button>
                  
                    <div> 
                        <div v-for="(item, index) in tasks" :key="item"  :class="{completedTaskDetails: item.completed, taskDetails: !item.completed}">                        
                            <div v-if="item.category == 'Medicine'"> 
                                
                                <div @dblclick="changeToCompleted(item)">
                                
                                    <v-card class="mx-auto" max-width="360" tile>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                            <v-list-item-title><span id="noneDisplay"> {{index}} ) </span> {{item.task}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.completeBy}}  <button id="deleteTask" @click="removeTask(item)"> Done </button></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                    <br>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>

        <div v-if="this.num_tasks.Other != 0">
            <div id="showTasksContainer">
                <div v-if="!showOther"> 
                    <button id="showTasks" @click ="showOtherTasks">
                        Show other
                    </button>
                </div>
                <div v-else>
                    <button id="showTasks" @click ="showOtherTasks">
                        Hide other
                    </button>
                  
                    <div> 
                        <div v-for="(item, index) in tasks" :key="item" :class="{completedTaskDetails: item.completed, taskDetails: !item.completed}">                        
                            <div v-if="item.category == 'Other'"> 
                                <div @dblclick="changeToCompleted(item)">
                                
                                    <v-card class="mx-auto" max-width="360" tile>
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                            <v-list-item-title><span id="noneDisplay"> {{index}} ) </span> {{item.task}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.completeBy}}  <button id="deleteTask" @click="removeTask(item)"> Done </button></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                    <br>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>



export default {

    
    data() {
        return{
            task: "",
            completeBy: "",
            category: "Education",
            showForm: false,
            showEducation: false,
            showWork: false,
            showMedicine: false,
            showOther: false,
            showFitness: false,
            num_tasks: {
                "Education":0,
                "Work":0,
                "Fitness":0,
                "Medicine":0,
                "Other":0,
            },
            
            tasks: [],


            valid: true,

            GenRules: [
                v => !!v || 'Password is required',
            ],

            select: null,
            items: [
                'Education',
                'Work',
                'Fitness',
                'Medicine',
                'Other',
            ],
            
            
            };  
        },
    

    methods: {
        toggleAddNewForm(){
            this.showForm = !this.showForm;
        },

        validate () {
            this.$refs.form.validate();
             var newTask = {
               "task": this.task,
               "completeBy": this.completeBy,
               "category": this.category,
               "completed": false,
            }

            this.tasks.push(newTask);
            this.num_tasks[this.category]++;

            console.log(this.tasks);

            this.showForm = false;
            this.task = "";
            this.completeBy = "";
            this.category = "Education";
        },
        reset () {
            this.$refs.form.reset()
        },

        submitDetails(){

            var newTask = {
               "task": this.task,
               "completeBy": this.completeBy,
               "category": this.category,
               "completed": false,
            }

            this.tasks.push(newTask);
            this.num_tasks[this.category]++;

            console.log(this.tasks);

            this.showForm = false;
            this.task = "";
            this.completeBy = "";
            this.category = "Education";
        },

        showEducationTasks(){
            this.showEducation = !this.showEducation;
        },

        showWorkTasks(){
            this.showWork = !this.showWork;
        },

        showFitnessTasks(){
            this.showFitness = !this.showFitness;
        },

        showMedicineTasks(){
            this.showMedicine = !this.showMedicine;
        },

        showOtherTasks(){
            this.showOther = !this.showOther;
        },

        changeToCompleted(t){
            
            t.completed = true;
            console.log(t);
        },

        removeTask(t){
            const index = this.tasks.indexOf(t);
            this.tasks.splice(index, 1);
            this.num_tasks[t.category]--; 
        }

        
    },
};
</script>
<style>

    .v-list-item__title {
     font-size: 18px;
    }

    #noneDisplay{
        display: none;
    }

    #addNew{
        height: 40px;
        width: 420px;
        background-color: blue;
        margin: 30px;
        border-radius: 10px;
    }
    #showTasks{
        height: 40px;
        width: 360px;
        background-color: blue;
        margin: 30px;
        border-radius: 10px;
    }
    #addNewContainer{
        max-width: 480px;
        margin: 30px auto;
        background: white;
        text-align: left;
        border-radius: 10px;
    }
    #showTasksContainer{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        border-radius: 10px;
    }
    .taskDetails{
        color: #aaa;
        margin: 10px 40px;
        font-size: 1.3em;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer ;
    }
    .completedTaskDetails{
        color: darkgreen;
        margin: 10px 40px;
        font-size: 0.9em;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    #deleteTask{
        background: green;
        padding: 10px 20px ;
        margin:5px;
        border-radius: 10px;
    }
   
</style>
