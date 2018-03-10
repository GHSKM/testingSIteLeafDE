---
layout: default
---

<div class="padding-Large">
<div class="row margin-top-large">
    <div class="col-md-12">
       <h2 class="text-primary border-bottom-thick"><b>Divine Memories</b></h2>
       </div>
       </div>
    <div class="row box margin-top-medium">    
        {% for memory in site.divine-memories %}       
                <div class="col-md-12" id="{{ include.Name | slugify }}">              
                    <div class="text-secondary"> <b><h3>{{ memory.title }}</h3></b></div>
                     <h4>{{ memory.content  }}</h4>
                     <p> - {{ memory.author  }}</p>   
                </div>
    {% endfor %}
    </div>    
       <div class="col-md-12 hidden-xs ">
       <h2 class="text-primary center">Our Popular Packages</h2>
       <div class="separator"></div>
        {% include all-packages.html category="Popular" limit="2" IsGuided="true" %}                  
       </div>
       </div>
      