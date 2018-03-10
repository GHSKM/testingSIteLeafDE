---
layout: default
permalink: /journey/
---
 <div class="row">
    {% for journey in site.journeys %}
    <div class="col-xs-12 col-sm-6 col-md-4" id="{{ include.Name | slugify }}">
          <div class="thumbnail text-center">
            <img src= "{{ journey.thumbnail }}" alt="">
              <div class="caption">
                <h4>  {{ journey.title }}</h4>
                 <h5>  {{ journey.excerpt  }}</h5>                
                <p>{{ journey.description }}</p>
                  <p><a href="{{ journey.url }}" class="btn btn-info" role="button">View More</a> </p>
            </div>
          </div>
        </div>
{% endfor %}
</div>